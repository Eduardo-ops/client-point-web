import { Router } from '@angular/router';
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
  successRegistrationCustomer: boolean = false
  registrationErrors: string[] = [];

  constructor(private customerService: CustomerService, private route: Router) {
    this.customer = new Customer()
  }

  ngOnInit(): void {
  }

  createCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(response => {
      this.registrationErrors = []
      this.successRegistrationCustomer = true
      this.customer = response
    }, errorResponse => {
      this.successRegistrationCustomer = false
      this.registrationErrors = errorResponse.error.errors
    })
  }

  backToListCustomer() {
    this.route.navigate(['/customer-list'])
  }

}
