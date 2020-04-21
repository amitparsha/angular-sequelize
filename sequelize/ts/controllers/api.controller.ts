import { UserCrudOperations } from "../repositories/user-crud.operations";
import { ResponseFormatConverter } from "../datasource/response-formatter";
import { EmpRoleCrud } from "../repositories/emp.operations";
import { CustomerCrud } from "../repositories/customer.operations";


let cors = require("cors");
let express = require("express");
let app = express();
let bodyParser = require("body-parser");
const userCrudOperations = UserCrudOperations.getInstance();
const empCrudOperations = EmpRoleCrud.getInstnce();
const customerCrudOperations = CustomerCrud.getInstance();

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app
  .get("/users", function (req: Request, res: any) {
    const responseConverter = ResponseFormatConverter.getInstance();

    userCrudOperations
      .getUserData()
      .then((result: any) => {
        res.status(200).send(responseConverter.convertToUsersFormat(result));
      })
      .catch((errror: any) => {
        res.status(400).send({ error: "cannot get users" });
      });
  })
  .put("/update-user/:id", function (req: Request, res: any) {
    // let client = getClientObject(Client);
    const user: any = req.body!;
    userCrudOperations
      .updateUsersData(user)
      .then((result: any) => {
        res.status(200).send({ result });
      })
      .catch((err: any) => {
        res.status(400).send({ ok: false });
      });
  })
  .post("/save-user", function (req: Request, res: any) {
    let newPostObject: Object = req.body!;
    console.log(newPostObject);
    userCrudOperations
      .saveUserData(newPostObject)
      .then((result: any) => {
        res.status(200).send({ posted: result });
      })
      .catch((err: any) => res.sataus(400).send({ ok: false }));
  })
  .delete("/remove-user/:id", function (req: any, res: any) {
    const id: number = parseInt(req.params!.id);
    userCrudOperations
      .deleteUserById(id)
      .then((result: any) => {
        res.status(200).send({ deleted: true });
      })
      .catch((err: any) => {
        res.status(400).send({ ok: false });
      });
  });

app.get("/emp-roles", (req: Request, res: any) => {
  empCrudOperations
    .getEmpRoles()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send({ ok: false });
    });
});

app.get("/customers", (req: Request, res: any) => {
  customerCrudOperations
    .getCustomers()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send({ ok: false });
    });
});
module.exports = app;
