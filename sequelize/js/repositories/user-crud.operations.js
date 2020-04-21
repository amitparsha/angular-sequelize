"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_models_1 = require("../datasource/get-models");
var UserCrudOperations = /** @class */ (function () {
    function UserCrudOperations() {
        this.models = get_models_1.GetModel.getInstance();
        this.userModel = this.models.getUserModel();
    }
    UserCrudOperations.getInstance = function () {
        if (!UserCrudOperations.instance) {
            UserCrudOperations.instance = new UserCrudOperations();
        }
        return UserCrudOperations.instance;
    };
    UserCrudOperations.prototype.getUserData = function () {
        var userModel = this.models.getUserModel();
        var empRoleModel = this.models.getEmpRoleModel();
        var customerModel = this.models.getCustomerModel();
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
    };
    UserCrudOperations.prototype.updateUsersData = function (user) {
        return this.userModel.update({
            id: user.id,
            firstName: user.firstName,
            middleName: user.middleName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            address: user.address,
            customerId: user.customerId,
            roleId: user.roleId,
        }, {
            where: {
                id: user.id,
            },
        });
    };
    UserCrudOperations.prototype.deleteUserById = function (id) {
        return this.userModel.destroy({
            where: {
                id: id,
            },
        });
    };
    UserCrudOperations.prototype.saveUserData = function (user1) {
        return this.userModel.create(user1);
    };
    return UserCrudOperations;
}());
exports.UserCrudOperations = UserCrudOperations;
var user1 = {
    firstName: 'Amit',
    middleName: '',
    lastName: 'Parshad',
    email: 'amit@gmail.com',
    phoneNumber: '+91-888888888',
    roleId: 1,
    customerId: 1,
    address: '67'
};
//# sourceMappingURL=user-crud.operations.js.map