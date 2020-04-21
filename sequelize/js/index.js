"use strict";
var indexExpress = require("express");
var routeApi = require("./controllers/api.controller");
var indexApp = indexExpress();
var port = process.env.PORT || 3008;
indexApp.use("/", routeApi);
indexApp.listen(port);
//# sourceMappingURL=index.js.map