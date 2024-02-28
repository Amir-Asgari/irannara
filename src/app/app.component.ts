import { Component, OnInit } from '@angular/core';
import { AuthService } from './share/service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular11App';

  public isLoggedIn: boolean = true;

  
  constructor(private authService: AuthService , private router:Router) {}
  ngOnInit(): void {
    this.isLoggedIn = this.authService.checkAuth();

  //   if (this.authService.loggedIn) {
  //     const accessToken = this.authService.getAccessToken();
  //     if (accessToken) {
  //       this.router.navigate(['/admin']);
  //     }
  //   } else {
  //     this.router.navigate(['/login']);
  //   }
  // }

  }
  public loginUser() {
    this.authService.login();
    this.isLoggedIn=true;
    console.log('user loged in', this.isLoggedIn);
    
  }
  public logoutUser() {
    this.authService.logout();
    this.isLoggedIn=false;
    console.log('user loged in', this.isLoggedIn);

  }

  
}
