"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var CustomerModel = /** @class */ (function () {
    function CustomerModel() {
    }
    CustomerModel.defineCustomer = function (sequelize) {
        return sequelize.define("customers", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            website: {
                type: sequelize_1.DataTypes.STRING,
            },
            description: {
                type: sequelize_1.DataTypes.STRING,
            },
        }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true
        });
    };
    return CustomerModel;
}());
exports.CustomerModel = CustomerModel;
//# sourceMappingURL=customer.model.js.map