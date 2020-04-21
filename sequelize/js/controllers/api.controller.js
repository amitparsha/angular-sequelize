"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_crud_operations_1 = require("../repositories/user-crud.operations");
var response_formatter_1 = require("../datasource/response-formatter");
var emp_operations_1 = require("../repositories/emp.operations");
var customer_operations_1 = require("../repositories/customer.operations");
var cors = require("cors");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var userCrudOperations = user_crud_operations_1.UserCrudOperations.getInstance();
var empCrudOperations = emp_operations_1.EmpRoleCrud.getInstnce();
var customerCrudOperations = customer_operations_1.CustomerCrud.getInstance();
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:4200",
}));
app
    .get("/users", function (req, res) {
    var responseConverter = response_formatter_1.ResponseFormatConverter.getInstance();
    userCrudOperations
        .getUserData()
        .then(function (result) {
        res.status(200).send(responseConverter.convertToUsersFormat(result));
    })
        .catch(function (errror) {
        res.status(400).send({ error: "cannot get users" });
    });
})
    .put("/update-user/:id", function (req, res) {
    // let client = getClientObject(Client);
    var user = req.body;
    userCrudOperations
        .updateUsersData(user)
        .then(function (result) {
        res.status(200).send({ result: result });
    })
        .catch(function (err) {
        res.status(400).send({ ok: false });
    });
})
    .post("/save-user", function (req, res) {
    var newPostObject = req.body;
    console.log(newPostObject);
    userCrudOperations
        .saveUserData(newPostObject)
        .then(function (result) {
        res.status(200).send({ posted: result });
    })
        .catch(function (err) { return res.sataus(400).send({ ok: false }); });
})
    .delete("/remove-user/:id", function (req, res) {
    var id = parseInt(req.params.id);
    userCrudOperations
        .deleteUserById(id)
        .then(function (result) {
        res.status(200).send({ deleted: true });
    })
        .catch(function (err) {
        res.status(400).send({ ok: false });
    });
});
app.get("/emp-roles", function (req, res) {
    empCrudOperations
        .getEmpRoles()
        .then(function (result) {
        res.status(200).send(result);
    })
        .catch(function (err) {
        res.status(400).send({ ok: false });
    });
});
app.get("/customers", function (req, res) {
    customerCrudOperations
        .getCustomers()
        .then(function (result) {
        res.status(200).send(result);
    })
        .catch(function (err) {
        res.status(400).send({ ok: false });
    });
});
module.exports = app;
//# sourceMappingURL=api.controller.js.map