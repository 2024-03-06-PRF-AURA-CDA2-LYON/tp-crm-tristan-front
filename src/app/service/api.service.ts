import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // Récupérer la liste des clients
  getCustomer(): Observable<any> {
    return this.http.get(`${this.apiUrl}/customers`);
  }

  // add un customer
  addCustomer(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/orders`, order);
  }

  // update un customer
  updateCustomer(id: number, order: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/orders/${id}`, order);
  }

  // Suppr un customer
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/orders/${id}`);
  }

  // Récupérer la liste des commandes
  getOrder(): Observable<any> {
    return this.http.get(`${this.apiUrl}/orders`);
  }

  // Ajouter une order
  addOrder(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/orders`, order);
  }

  // update une order
  updateOrder(id: number, order: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/orders/${id}`, order);
  }

  // Suppr une order
  deleteOrder(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/orders/${id}`);
  }
}
