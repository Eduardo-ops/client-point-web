import { CustomerService } from './../customer.service';
import { Customer } from './../customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customer: Customer;

  constructor(private customerService: CustomerService) {
    this.customer = new Customer()
  }

  ngOnInit(): void {
  }

  createCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(response => {
      console.log(response)
    })
  }

}
