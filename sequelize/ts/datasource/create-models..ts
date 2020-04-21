import { CustomerModel } from "../models/customer.model";
import { EmpRoleModel } from "../models/emp-role.model";
import { UserModel } from "../models/user.model";
import { ConnectionToDb } from "./connection";
import { UserRelations } from "../relations/user-role-customer.relation";

export class CreateAllModels {
  static instance: CreateAllModels;
  dbInstance = ConnectionToDb.getInstance();
  sequelize = this.dbInstance.sequelize;
  customerModel: any;
  empRoleModel: any;
  userModel: any;
  constructor() {}
  static getInstance() {
    if (!CreateAllModels.instance) {
      CreateAllModels.instance = new CreateAllModels();
      CreateAllModels.instance.createAllModels()
    }
    return CreateAllModels.instance;
  }
  forceMigrate() {
    CreateAllModels.instance.sequelize.sync({force: true});
  }
  private createAllModels() {
    this.customerModel = CustomerModel.defineCustomer(this.sequelize);
    this.empRoleModel = EmpRoleModel.defineEmpRole(this.sequelize);
    this.userModel = UserModel.deineUser(this.sequelize);
    const userRelations = UserRelations.getInstance(this.userModel);
    userRelations.defineCustomerRelations(this.customerModel);
    userRelations.defineEmpRelation(this.empRoleModel);
  }
}


