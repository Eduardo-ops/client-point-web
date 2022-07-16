import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Customer } from '../customer';
import { Observable } from 'rxjs';

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
    if (this.id) {
      this.customerService.readCustomerById(this.id).subscribe(
        response => this.customer = response, errorResponse => this.customer = new Customer())
    }

    /* let params: Observable<Params> = this.route.params
    params.subscribe(urlParams => {
      this.id = urlParams['id']
      if (this.id) {
        this.customerService.readCustomerById(this.id).subscribe(
          response => this.customer = response, responseError => this.customer = new Customer()
        )
      }
    }) */

  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customer).subscribe(customer => {
      this.successRegistrationCustomer = true
      this.registrationErrors = []
    }, errorResponse => {
      this.registrationErrors = ['Erro ao atualizar cliente.']
    })
  }

  backToListCustomer() {
    this.router.navigate(['/customer-list'])
  }

}
