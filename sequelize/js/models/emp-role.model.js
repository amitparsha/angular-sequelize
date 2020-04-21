"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var EmpRoleModel = /** @class */ (function () {
    function EmpRoleModel() {
    }
    EmpRoleModel.defineEmpRole = function (sequelize) {
        return (sequelize.define("emp_roles", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            roleName: {
                type: sequelize_1.DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
        }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true
        }));
    };
    return EmpRoleModel;
}());
exports.EmpRoleModel = EmpRoleModel;
//# sourceMappingURL=emp-role.model.js.map