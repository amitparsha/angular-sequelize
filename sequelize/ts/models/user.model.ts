import { DataTypes } from "sequelize";

export class UserModel {
  static deineUser(sequelize: any) {
    return sequelize.define(
      "users",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            nameFormat: function (value: any) {
              const regexpName = /^[a-zA-Z_\-]+$/;
              if (!regexpName.test(value)) {
                throw new Error("First Name is not Valid");
              }
            },
          },
        },
        middleName: {
          type: DataTypes.STRING,
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            nameFormat: function (value: any) {
              const regexpName = /^[a-zA-Z_\-]+$/;
              if (!regexpName.test(value)) {
                throw new Error("Last Name is not Valid");
              }
            },
          },
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            emailFormat: function (value: any) {
              const regexpName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
              if (!regexpName.test(value)) {
                throw new Error("Email is not Valid");
              }
            },
          },
        },
        phoneNumber: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: {
            args: [1,14],
            msg: "please enter valid phone number"
            },
            phoneNumberFormat: function (value: any) {
              const regexpName = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
              if (!regexpName.test(value)) {
                throw new Error("Phone Number is not Valid");
              }
            },
          },
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
        underscored: true
      }
    );
  }
}
