"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRelations = /** @class */ (function () {
    function UserRelations(userModel) {
        this.userModel = userModel;
    }
    UserRelations.getInstance = function (userModel) {
        if (!UserRelations.instance) {
            UserRelations.instance = new UserRelations(userModel);
        }
        return UserRelations.instance;
    };
    UserRelations.prototype.defineCustomerRelations = function (customerModel) {
        customerModel.hasMany(this.userModel, { foreignKey: "customerId" });
        this.userModel.belongsTo(customerModel, { foreignKey: "customerId" });
    };
    UserRelations.prototype.defineEmpRelation = function (empRoleModel) {
        empRoleModel.hasMany(this.userModel, { foreignKey: "role_id" });
        this.userModel.belongsTo(empRoleModel, { foreignKey: "roleId" });
    };
    return UserRelations;
}());
exports.UserRelations = UserRelations;
//# sourceMappingURL=user-role-customer.relation.js.map