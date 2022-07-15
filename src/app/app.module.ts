import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomerFormComponent } from './components/customer/customer-form/customer-form.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerReadComponent } from './components/customer/customer-read/customer-read.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';

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
