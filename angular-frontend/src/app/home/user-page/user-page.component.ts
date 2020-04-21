import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { DataService } from "../../service/data.service";
import {
  UserDataFormat,
  EmpRoles,
  CustomersFormat,
  SaveDataFormat,
} from "src/app/service/interfaces";
import { RowOperationsService } from "./service/row-operations.service";
import { HttpErrorResponse } from "@angular/common/http";
const cloneDeep = require("lodash.clonedeep");

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
  styleUrls: ["./user-page.component.css"],
  providers: [RowOperationsService],
})
export class UserPageComponent implements OnInit, OnDestroy {
  result: string;
  users: UserDataFormat[];
  cloneUsers: UserDataFormat[];
  editButtonClicked: boolean[] = [];
  saveButtonBlocked: boolean[] = [];
  roles: EmpRoles[];
  customers: CustomersFormat[];
  constructor(
    private userDataService: DataService,
    private rowOperations: RowOperationsService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userDataService.getUsers().subscribe(
      (users: UserDataFormat[]) => {
        this.userDataService.userLoadedEmiiter.next(true);
        this.users = users;
        this.cloneUsers = cloneDeep(this.users);
        this.initEditButtons(this.users.length);
      },
      (err) => {
        this.result = "oops Something wrong happened";
      }
    );
    this.userDataService.getEmpRoles().subscribe(
      (res: EmpRoles[]) => {
        this.roles = res;
      },
      (err) => {
        this.result = "Error to get roles";
      }
    );
    this.userDataService.getCustomers().subscribe(
      (res: CustomersFormat[]) => {
        this.customers = res;
      },
      (err) => {
        this.result = "Error to get list of customers";
      }
    );
  }
  initEditButtons(numberOfUsers: number) {
    for (let i = 0; i < numberOfUsers; i++) {
      this.editButtonClicked.push(false);
      this.saveButtonBlocked.push(false);
    }
  }
  onEdit(rowIndex) {
    this.editButtonClicked[rowIndex] = true;
    this.saveButtonBlocked[rowIndex] = true;
  }

  onDelete(id: number, rowIndex: number) {
    this.userDataService.deleteUser(id).subscribe(
      (response) => {
        this.users.splice(rowIndex, 1);
        this.editButtonClicked.splice(rowIndex, 1);
        this.saveButtonBlocked.splice(rowIndex, 1);
        this.result = "User Deleted Suceesfully";
      },
      (err: HttpErrorResponse) => {
        this.result = "Error" + " " + err.message;
      }
    );
  }

  onCancel(rowIndex) {
    this.saveButtonBlocked[rowIndex] = false;
    this.users[rowIndex] = cloneDeep(this.cloneUsers[rowIndex]);
    this.editButtonClicked[rowIndex] = false;
  }
  onSave(rowIndex) {
    const user = this.users[rowIndex];
    const convertedUser: SaveDataFormat = this.rowOperations.convertUser(user);
    this.userDataService.updateUser(convertedUser, convertedUser.id).subscribe(
      (res) => {
        this.saveButtonBlocked[rowIndex] = false;
        this.editButtonClicked[rowIndex] = false;
        this.cloneUsers[rowIndex] = this.users[rowIndex];
        this.result = "Data Upadated!";
      },
      (err: HttpErrorResponse) => {
        this.users[rowIndex] = this.cloneUsers[rowIndex];
        this.result = "Error Occured" + err.message;
      }
    );
  }
  onHandleAlert() {
    this.result = null;
  }
  ngOnDestroy() {
    this.userDataService.userLoadedEmiiter.next(false);
  }
}
