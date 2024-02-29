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

  public isLoggedIn: any = false;

  constructor(private authService: AuthService, private router: Router) {
    // this.isLoggedIn = this.authService.checkAuth();
  }

  ngOnInit(): void {
    const currentAccessToken = localStorage.getItem('access_token');
    const currentRefreshToken = localStorage.getItem('refresh_token');
     this.authService.checkAuth(currentAccessToken);
     this.authService.checkAuth(currentRefreshToken);
     this.isLoggedIn = this.authService.loggedIn
  }
//   ngOnInit(): void {
//     if (this.authService.loggedIn) {
//       const accessToken = this.authService.getAccessToken();
// console.log('accestoken in app' , accessToken);

//       if (accessToken) {
//         this.isLoggedIn = true;
//         this.router.navigate(['/admin']);
//       }
//     } else {
//       this.isLoggedIn = false;
//       this.router.navigate(['/login']);
//     }
//   }

  // }
  // public loginUser() {
  //   this.authService.login();
  //   this.isLoggedIn=true;
  //   console.log('user loged in', this.isLoggedIn);

  // }
  public logoutUser() {
    this.authService.logout();
    this.isLoggedIn=false;
    console.log('user loged in', this.isLoggedIn);

  }
}
