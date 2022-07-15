import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  customer: Customer;
  successRegistrationCustomer: boolean = false
  registrationErrors: string[] = [];
  id!: number;

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) {
    this.customer = new Customer()
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.customerService.readCustomerById(this.id).subscribe(
      response => this.customer = response, errorResponse => this.customer = new Customer())
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customer).subscribe(customer => {
      this.registrationErrors = []
      this.successRegistrationCustomer = true
      this.customer = customer
    }, errorResponse => {
      this.successRegistrationCustomer = false
      this.registrationErrors = errorResponse.error.errors
    })
  }

  backToListCustomer() {
    this.router.navigate(['/customer-list'])
  }

}
