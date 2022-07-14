import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-read',
  templateUrl: './customer-read.component.html',
  styleUrls: ['./customer-read.component.css']
})
export class CustomerReadComponent implements OnInit {

  customerArray: Customer[] = []

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.readAllCustomer().subscribe(customers => {
      this.customerArray = customers
    })
  }

  /* readAllCustomer() {
    this.customerService.readAllCustomer().subscribe(customers => {
      this.customer = customers
    })
  } */

}
