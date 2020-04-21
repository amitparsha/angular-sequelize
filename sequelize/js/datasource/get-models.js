"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_models_1 = require("./create-models.");
var GetModel = /** @class */ (function () {
    function GetModel() {
        this.allModels = create_models_1.CreateAllModels.getInstance();
    }
    GetModel.getInstance = function () {
        if (!GetModel.instance) {
            GetModel.instance = new GetModel();
        }
        return GetModel.instance;
    };
    GetModel.prototype.getUserModel = function () {
        return this.allModels.userModel;
    };
    GetModel.prototype.getEmpRoleModel = function () {
        return this.allModels.empRoleModel;
    };
    GetModel.prototype.getCustomerModel = function () {
        return this.allModels.customerModel;
    };
    return GetModel;
}());
exports.GetModel = GetModel;
//# sourceMappingURL=get-models.js.map