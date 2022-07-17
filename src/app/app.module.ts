import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TemplateComponent } from './shared/components/template/template.component';
import { CustomerFormComponent } from './shared/components/customer/customer-form/customer-form.component';
import { CustomerReadComponent } from './shared/components/customer/customer-read/customer-read.component';
import { CustomerUpdateComponent } from './shared/components/customer/customer-update/customer-update.component';
import { FooterComponent } from './shared/components/template/footer/footer.component';
import { NavbarComponent } from './shared/components/template/navbar/navbar.component';
import { SidebarComponent } from './shared/components/template/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    CustomerFormComponent,
    CustomerReadComponent,
    CustomerUpdateComponent,
    CustomerUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
