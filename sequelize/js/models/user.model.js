"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    UserModel.deineUser = function (sequelize) {
        return sequelize.define("users", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            firstName: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                validate: {
                    nameFormat: function (value) {
                        var regexpName = /^[a-zA-Z_\-]+$/;
                        if (!regexpName.test(value)) {
                            throw new Error("First Name is not Valid");
                        }
                    },
                },
            },
            middleName: {
                type: sequelize_1.DataTypes.STRING,
            },
            lastName: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                validate: {
                    nameFormat: function (value) {
                        var regexpName = /^[a-zA-Z_\-]+$/;
                        if (!regexpName.test(value)) {
                            throw new Error("Last Name is not Valid");
                        }
                    },
                },
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                validate: {
                    emailFormat: function (value) {
                        var regexpName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                        if (!regexpName.test(value)) {
                            throw new Error("Email is not Valid");
                        }
                    },
                },
            },
            phoneNumber: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: {
                        args: [1, 14],
                        msg: "please enter valid phone number"
                    },
                    phoneNumberFormat: function (value) {
                        var regexpName = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
                        if (!regexpName.test(value)) {
                            throw new Error("Phone Number is not Valid");
                        }
                    },
                },
            },
            address: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
        }, {
            freezeTableName: true,
            underscored: true
        });
    };
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map