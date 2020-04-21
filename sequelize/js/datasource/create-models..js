"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_model_1 = require("../models/customer.model");
var emp_role_model_1 = require("../models/emp-role.model");
var user_model_1 = require("../models/user.model");
var connection_1 = require("./connection");
var user_role_customer_relation_1 = require("../relations/user-role-customer.relation");
var CreateAllModels = /** @class */ (function () {
    function CreateAllModels() {
        this.dbInstance = connection_1.ConnectionToDb.getInstance();
        this.sequelize = this.dbInstance.sequelize;
    }
    CreateAllModels.getInstance = function () {
        if (!CreateAllModels.instance) {
            CreateAllModels.instance = new CreateAllModels();
            CreateAllModels.instance.createAllModels();
        }
        return CreateAllModels.instance;
    };
    CreateAllModels.prototype.forceMigrate = function () {
        CreateAllModels.instance.sequelize.sync({ force: true });
    };
    CreateAllModels.prototype.createAllModels = function () {
        this.customerModel = customer_model_1.CustomerModel.defineCustomer(this.sequelize);
        this.empRoleModel = emp_role_model_1.EmpRoleModel.defineEmpRole(this.sequelize);
        this.userModel = user_model_1.UserModel.deineUser(this.sequelize);
        var userRelations = user_role_customer_relation_1.UserRelations.getInstance(this.userModel);
        userRelations.defineCustomerRelations(this.customerModel);
        userRelations.defineEmpRelation(this.empRoleModel);
    };
    return CreateAllModels;
}());
exports.CreateAllModels = CreateAllModels;
//# sourceMappingURL=create-models..js.map