export interface UserDataFormat {
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

export interface SaveDataFormat {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  roleId: number;
  address: string;
  customerId: number;
}

export interface EmpRoles {
  id: number;
  roleName?: string;
  role?: string;
}

export interface CustomersFormat {
  id: number;
  name: string;
}
