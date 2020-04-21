export interface UserGetDataFormat {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  roleId: number;
  roleName: string;
  address: string;
  customerId: number;
  customerName: string;
}
export interface UserSaveDataFormat {
  id?: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  roleId: number;
  address: string;
  customerId: number;
}
