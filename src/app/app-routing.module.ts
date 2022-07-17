import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomerFormComponent } from './shared/components/customer/customer-form/customer-form.component';
import { CustomerReadComponent } from './shared/components/customer/customer-read/customer-read.component';
import { CustomerUpdateComponent } from './shared/components/customer/customer-update/customer-update.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "customer-form",
    component: CustomerFormComponent
  },
  {
    path: "customer-update-form/:id",
    component: CustomerUpdateComponent
  },
  {
    path: "customer-list",
    component: CustomerReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
