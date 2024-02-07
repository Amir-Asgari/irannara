import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { CoreRoutingModule } from './core-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
// import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    // AdminComponent,
    // HomeComponent,
    // AboutComponent,
    // ContactComponent,
  
    NotAuthorizedComponent,
    // SigninComponent
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
