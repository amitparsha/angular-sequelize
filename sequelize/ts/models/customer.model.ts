import { DataTypes } from "sequelize";

export class CustomerModel {
  static defineCustomer(sequelize: any) {
    return sequelize.define(
      "customers",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        website: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.STRING,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
        underscored: true
      }
    );
  }
}
