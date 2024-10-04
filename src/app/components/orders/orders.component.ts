import { Component, OnInit } from '@angular/core';
import { Order, Customer } from "../../interface/interface";
import { ApiService } from "../../service/api.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  customers: Customer[] = [];
  newOrder: Order = { customer: {} } as Order;
  selectedOrder: Order | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getOrders();
    this.getCustomers();
  }

  getOrders(): void {
    this.apiService.getOrder().subscribe((data: Order[]) => {
      this.orders = data;
    });
  }

  getCustomers(): void {
    this.apiService.getCustomer().subscribe((data: Customer[]) => {
      this.customers = data;
    });
  }

  addOrder(): void {
    this.apiService.addOrder(this.newOrder).subscribe(() => {
      this.getOrders();
      this.newOrder = {} as Order;
    });
  }

  selectOrderForUpdate(order: Order): void {
    this.selectedOrder = { ...order };
    if (!this.selectedOrder.customer) {
      this.selectedOrder.customer = <Customer>{};
    }
  }

  updateOrder(): void {
    if (this.selectedOrder) {
      this.apiService.updateOrder(this.selectedOrder.id, this.selectedOrder).subscribe(() => {
        this.getOrders();
        this.selectedOrder = null;
      });
    }
  }

  deleteOrder(id: number): void {
    this.apiService.deleteOrder(id).subscribe(() => {
      this.getOrders();
    });
  }

  translateOrderState(state: string): string {
    return state === 'CANCELED' ? 'Annulée' : state === 'OPTION' ? 'Option' : 'Confirmée';
  }
}
