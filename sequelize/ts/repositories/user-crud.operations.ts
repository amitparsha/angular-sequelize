import { GetModel } from "../datasource/get-models";
import { UserGetDataFormat, UserSaveDataFormat } from "../datasource/interfaces";

export class UserCrudOperations {
  models = GetModel.getInstance();
  private userModel = this.models.getUserModel();

  static instance: UserCrudOperations;
  static getInstance() {
    if (!UserCrudOperations.instance) {
      UserCrudOperations.instance = new UserCrudOperations();
    }
    return UserCrudOperations.instance;
  }
  getUserData() {
    const userModel = this.models.getUserModel();
    const empRoleModel = this.models.getEmpRoleModel();
    const customerModel = this.models.getCustomerModel();
    return userModel.findAll({
      include: [
        {
          model: empRoleModel,
        },
        {
          model: customerModel,
        },
      ],
    });
  }
  updateUsersData(user: UserSaveDataFormat) {
    return this.userModel.update(
      {
        id: user.id,
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        address: user.address,
        customerId: user.customerId,
        roleId: user.roleId,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
  }
  deleteUserById(id: number) {
    return this.userModel.destroy({
      where: {
        id: id,
      },
    });
  }
  saveUserData(user1: any) {
    return this.userModel.create(user1);
  }
}
const user1 : UserSaveDataFormat = {
  firstName: 'Amit',
  middleName: '',
  lastName: 'Parshad',
  email: 'amit@gmail.com',
  phoneNumber: '+91-888888888',
  roleId: 1,
  customerId: 1,
  address: '67'
}
