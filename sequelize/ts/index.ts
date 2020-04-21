let indexExpress = require("express");
let routeApi = require("./controllers/api.controller");
let indexApp = indexExpress();
let port = process.env.PORT || 3008;
indexApp.use("/", routeApi);
indexApp.listen(port);
