"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_models_1 = require("./datasource/create-models.");
var createAllModels = create_models_1.CreateAllModels.getInstance();
createAllModels.forceMigrate();
//# sourceMappingURL=migrate.js.map