import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  UserDataFormat,
  EmpRoles,
  CustomersFormat,
  SaveDataFormat,
} from "./interfaces";
import { map, delay } from "rxjs/operators";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class DataService {
  constructor(private httpClient: HttpClient) {}
  userLoadedEmiiter = new Subject<boolean>();

  getUsers() {
    return this.httpClient.get("http://localhost:3008/users");
  }
  updateUser(user: SaveDataFormat, id: number) {
    return this.httpClient.put(`http://localhost:3008/update-user/${id}`, user);
  }

  saveUser(user: UserDataFormat) {
    return this.httpClient.post("http://localhost:3008/save-user", user);
  }
  deleteUser(id: number) {
    return this.httpClient.delete(`http://localhost:3008/remove-user/${id}`);
  }
  getEmpRoles() {
    return this.httpClient.get(`http://localhost:3008/emp-roles`).pipe(
      map((responseRoles: EmpRoles[]) => {
        const empRoles: EmpRoles[] = [];
        for (const individualRoles of responseRoles) {
          const empRole: EmpRoles = {
            id: individualRoles.id,
            role: individualRoles.roleName,
          };
          empRoles.push(empRole);
        }
        return empRoles;
      })
    );
  }
  getCustomers() {
    return this.httpClient.get(`http://localhost:3008/customers`).pipe(
      map((responseCustomers: CustomersFormat[]) => {
        const customers: CustomersFormat[] = [];
        for (const individualCustomer of responseCustomers) {
          const customer: CustomersFormat = {
            id: individualCustomer.id,
            name: individualCustomer.name,
          };
          customers.push(customer);
        }
        return customers;
      })
    );
  }
}
