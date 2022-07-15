import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl: string = environment.apiURLBase + '/api/customers'

  constructor(private http: HttpClient) { }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer)
  }

  readAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl)
  }

  readCustomerById(id: number): Observable<Customer> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }

  updateCustomer(customer: Customer): Observable<any> {
    const urlCustomer = `${this.apiUrl}/${customer.id}`
    return this.http.put<Customer>(urlCustomer, customer)
  }
}
