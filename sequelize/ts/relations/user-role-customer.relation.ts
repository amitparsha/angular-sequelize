export class UserRelations {
  static instance: UserRelations;
  constructor(private userModel: any) {}
  static getInstance(userModel: any) {
    if (!UserRelations.instance) {
      UserRelations.instance = new UserRelations(userModel);
    }
    return UserRelations.instance;
  }
  defineCustomerRelations(customerModel: any) {
    customerModel.hasMany(this.userModel, { foreignKey: "customerId" });
    this.userModel.belongsTo(customerModel, { foreignKey: "customerId" });
  }
  defineEmpRelation(empRoleModel: any) {
    empRoleModel.hasMany(this.userModel, { foreignKey: "role_id" });
    this.userModel.belongsTo(empRoleModel, { foreignKey: "roleId" });
  }
}
