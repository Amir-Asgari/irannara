import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';

// export const routes: Routes = [
//   { path: '', component: HomeComponent},
//   { path: 'home', component: HomeComponent},
//   { path: 'contact', component: ContactComponent},
//   { path: 'about', component: AboutComponent},
//   { path: 'admin', component: AdminComponent},
// ];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CoreRoutingModule {}
