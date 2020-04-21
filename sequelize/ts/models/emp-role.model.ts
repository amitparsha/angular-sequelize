import {DataTypes} from 'sequelize';
export class EmpRoleModel {
 static defineEmpRole(sequelize: any) {
  return (sequelize.define(
    "emp_roles",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      roleName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      underscored: true
    }
  )
  );
}

}