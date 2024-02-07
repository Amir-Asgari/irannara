import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AdminComponent } from './core/admin/admin.component';
import { AboutComponent } from './core/about/about.component';
import { NotAuthorizedComponent } from './core/not-authorized/not-authorized.component';
import { AuthGuard } from './auth.guard';
import { SigninComponent } from './core/signin/signin.component';

 const routes: Routes = [
  // { path: '', component: HomeComponent},
  // { path: 'signin', component: SigninComponent},
  // { path: 'home', component: HomeComponent},
  // { path: 'contact', component: ContactComponent, canActivate:[AuthGuard]},
  // { path: 'about', component: AboutComponent},
  // {path: 'notAuthorized', component:NotAuthorizedComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
