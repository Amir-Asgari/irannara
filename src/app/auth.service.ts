import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean = false;

  public isAuthenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    });
  }

  public checkAuth(){
    return this.loggedIn
    console.log('checkAuth');
    console.log(this.checkAuth);
    
  }

  public login() {
    this.loggedIn = true;
    console.log('login');
    
  }

  public logout() {
    this.loggedIn = false;
    console.log('logout');
    
  }
}
