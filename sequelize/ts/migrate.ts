import { CreateAllModels } from "./datasource/create-models.";

const createAllModels = CreateAllModels.getInstance();
createAllModels.forceMigrate();