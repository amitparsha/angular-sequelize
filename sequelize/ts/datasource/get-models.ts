import { CreateAllModels } from "./create-models.";

export class GetModel {
    private allModels = CreateAllModels.getInstance();
    static instance: GetModel;
    static getInstance() {
        if(!GetModel.instance) {
            GetModel.instance = new GetModel();

        }
        return GetModel.instance;
    }
    getUserModel() {
        return this.allModels.userModel;
    }
    getEmpRoleModel() {
        return this.allModels.empRoleModel
    }
    getCustomerModel() {
        return this.allModels.customerModel;
    }
}
