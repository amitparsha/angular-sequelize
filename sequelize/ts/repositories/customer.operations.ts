import { GetModel } from "../datasource/get-models";

const models = GetModel.getInstance();
const customerModel = models.getCustomerModel();
export class CustomerCrud {
   private static instance: CustomerCrud;
   static getInstance() {
       if(!this.instance) {
           this.instance = new CustomerCrud();
       }
       return this.instance;
   }
   async getCustomers() {
    let customers: {[key:string]: number| string}[] = []
    await customerModel.findAll().then((result: any)=> {
        result.forEach((customer: any)=> {
            customers.push(customer.dataValues);
        });
        
    });
    return customers;
   }
}

