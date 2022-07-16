import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-read',
  templateUrl: './customer-read.component.html',
  styleUrls: ['./customer-read.component.css']
})
export class CustomerReadComponent implements OnInit {

  customerArray: Customer[] = []
  selectedCustomer: Customer
  messageSuccess!: string
  messageError!: string

  constructor(private customerService: CustomerService, private router: Router) {
    this.selectedCustomer = new Customer()
  }

  ngOnInit(): void {
    this.customerService.readAllCustomer().subscribe(customers => {
      this.customerArray = customers
    })
  }

  newRegistration() {
    this.router.navigate(['/customer-form'])
  }

  preparingDeleteCustomer(customer: Customer) {
    this.selectedCustomer = customer
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.selectedCustomer).subscribe(
      response => {
        this.messageSuccess = 'Cliente excluído com sucesso!',
          this.ngOnInit()
      },
      error => this.messageError = 'Erro ao excluir cliente'
    )
  }
}
