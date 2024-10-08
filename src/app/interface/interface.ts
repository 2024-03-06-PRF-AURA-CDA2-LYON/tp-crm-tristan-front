export interface Customer {
  id: number;
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  country: string;
  city: string;
  state: string;
}

export interface Order {
  id: number;
  serviceType: string;
  tva: number;
  nbDays: number;
  totalExcludeTax: number;
  state: string;
  comment: string;
  customer: Customer;
}
