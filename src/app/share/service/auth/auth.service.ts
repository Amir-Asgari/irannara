import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedIn: boolean = true;
  public currentAccessToken :any = null
  public tokenChanged: EventEmitter<void> = new EventEmitter<void>();

  public isAuthenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    });
  }

  public checkAuth(
    // currentRefreshToken: string | null
    accessToken: string | null
  ) {
    if (accessToken ) {
      console.log(accessToken);
      this.currentAccessToken=accessToken
      console.log(this.currentAccessToken);
      this.loggedIn = true;
      this.login();
    }
  }

  public login() {
    this.loggedIn = true;
    console.log('login');
  }

  public logout() {
    this.loggedIn = false;
    console.log('logout');
  }

  public setAccessToken(token: string) {
    localStorage.setItem('access_token', token);
    this.tokenChanged.emit();
  }

  public getAccessToken(): string | null {
    const token = localStorage.getItem('access_token');
    console.log('Access token from localStorage:', token);
    return token;
  }

  public setRefreshToken(token: string) {
    localStorage.setItem('refresh_token', token);
    this.tokenChanged.emit();
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }
}
