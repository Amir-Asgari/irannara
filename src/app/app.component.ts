import { Component, OnInit } from '@angular/core';
import { AuthService } from './share/service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular11App';

  public isLoggedIn: boolean = true;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.isLoggedIn = this.authService.checkAuth();
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
