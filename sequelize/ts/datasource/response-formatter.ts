import { UserGetDataFormat } from "./interfaces";

export class ResponseFormatConverter {
    static instance: ResponseFormatConverter;
    static getInstance() {
        if(!this.instance) {
            this.instance = new ResponseFormatConverter();
        }
        return  this.instance;
    }
    convertToUsersFormat(queryResult: any) {
        let  users: UserGetDataFormat[] = [];
        queryResult.forEach((dataValue: any) => {
            users.push({
                id: dataValue.id,
                firstName: dataValue.firstName,
                middleName: dataValue.middleName,
                lastName: dataValue.lastName,
                email: dataValue.email,
                phoneNumber: dataValue.phoneNumber,
                roleId: dataValue.emp_role.dataValues.id,
                roleName: dataValue.emp_role.dataValues.role_name,
                address: dataValue.address,
                customerId: dataValue.customer.dataValues.id,
                customerName: dataValue.customer.dataValues.name
            })
        });
        return users;
    }
}