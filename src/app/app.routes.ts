import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {OrdersComponent} from "./components/orders/orders.component";
import {CustomersComponent} from "./components/customers/customers.component";

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full' },
  { path: 'customers', component: CustomersComponent },
  { path: 'orders', component: OrdersComponent },
];
