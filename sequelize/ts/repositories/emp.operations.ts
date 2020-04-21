import { GetModel } from "../datasource/get-models";

const models = GetModel.getInstance();
const empModel = models.getEmpRoleModel();
export class EmpRoleCrud {
   private static instance: EmpRoleCrud;
   static getInstnce() {
       if(!this.instance) {
           this.instance = new EmpRoleCrud();
       }
       return this.instance;
   }
   async getEmpRoles() {
    let empRoles: {[key:string]: number| string}[] = []
    await empModel.findAll().then((result: any)=> {
        result.forEach((emp_roles: any)=> {
            empRoles.push(emp_roles.dataValues);
        });
        
    });
    return empRoles;
   }
}

