import { Component, OnInit, ViewChild, NgModule } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";
import {
  EmpRoles,
  CustomersFormat,
  UserDataFormat,
} from "src/app/service/interfaces";
import { DataService } from "../../service/data.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"],
})
export class NewUserComponent implements OnInit {
  @ViewChild("f") newUserForm: NgForm;
  result: string;
  roles: EmpRoles[];
  customers: CustomersFormat[];
  defaultRole: number;
  defaultCustomer: number;
  constructor(private userDataService: DataService) {}

  ngOnInit(): void {
    this.userDataService.getEmpRoles().subscribe((res: EmpRoles[]) => {
      this.roles = res;
      this.defaultRole = res[0].id;
    });
    this.userDataService.getCustomers().subscribe((res: CustomersFormat[]) => {
      this.customers = res;
      this.defaultCustomer = res[0].id;
    });
  }
  onSubmit() {
    const newUserSave: UserDataFormat = this.newUserForm.value;
    this.userDataService.saveUser(newUserSave).subscribe(
      (res) => {
        this.result = "Successfully Created New User";
      },
      (err: HttpErrorResponse) => {
        this.result = err.message;
      }
    );
    this.newUserForm.reset();
  }
  onHandleAlert() {
    this.result = null;
  }
}
