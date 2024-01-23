import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoreRoutingModule } from './core-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';



@NgModule({
  declarations: [
    // AdminComponent,
    // HomeComponent,
    // AboutComponent,
    // ContactComponent
  
    NotAuthorizedComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
})
export class CoreModule { }
