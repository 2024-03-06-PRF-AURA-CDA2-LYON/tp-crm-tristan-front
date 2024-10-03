import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Customer } from '../../interface/interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  newCustomer: {
    firstName: string;
    lastName: string;
    zipCode: string;
    country: string;
    phoneNumber: string;
    address: string;
    city: string;
    companyName: string;
    state: string;
    email: string
  } = {
    companyName: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    state: ''}
  selectedCustomer: Customer | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.apiService.getCustomer().subscribe((data: Customer[]) => {
      this.customers = data;
    });
  }

  addCustomer(): void {
    this.apiService.addCustomer(this.newCustomer).subscribe(() => {
      this.getCustomers();
    });
  }

  updateCustomer(): void {
    if (this.selectedCustomer) {
      this.apiService.updateCustomer(this.selectedCustomer.id, this.selectedCustomer).subscribe(() => {
        this.getCustomers();
        this.selectedCustomer = null;
      });
    }
  }

  deleteCustomer(customerId: number): void {
    this.apiService.deleteCustomer(customerId).subscribe(() => {
      this.customers = this.customers.filter(customer => customer.id !== customerId);
    });
  }

  selectCustomerForUpdate(customer: Customer): void {
    this.selectedCustomer = { ...customer };
  }

  translateState(state: string): string {
    return state === 'ACTIVE' ? 'Actif' : 'Inactif';
  }
}
