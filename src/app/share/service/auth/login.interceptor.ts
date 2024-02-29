import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  private tokenChangedSubscription: Subscription;

  constructor(private router: Router, private authService: AuthService) {
    this.tokenChangedSubscription = this.authService.tokenChanged.subscribe(
      () => {
        this.checkTokens();
      }
    );
  }

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).pipe(
      tap((event) => {
        
        if (event instanceof HttpResponse) {
          // const accessToken = event.body.result.access_token;
          // const refreshToken = event.body.result.refresh_token;
          // this.authService.getAccessToken(accessToken);

          console.log(
            'status:',
            event.status,
            ', message:',
            event.body.message,
            ', result:',
            event.body.result,
            ', token:',
            event.body.result.access_token
          );
        }
      }),
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(error);
      }),
      tap((event) => {
        if (event instanceof HttpResponse) {
          const accessToken = event.body.result.access_token;
          const refreshToken = event.body.result.refresh_token;
          // console.log(accessToken);
          // console.log(refreshToken);
    
        }
      }),
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const responseData: any = event.body;
          const accessToken = event.body.result.access_token;
          const refreshToken = event.body.result.refresh_token;
          if (refreshToken=== this.authService.currentRefreshToken && event.status === 200) {
            this.authService.setAccessToken(accessToken);
            this.authService.login();
            this.router.navigate(['/admin']);
          }else{
            this.authService.logout();
            this.router.navigate(['/signin']);

          }
        }
        return event;
      })
    );
  }

  private checkTokens() {
    const accessToken = this.authService.getAccessToken();
    const refreshToken = this.authService.getRefreshToken();
    console.log(accessToken);
    console.log(refreshToken);

    if (accessToken) {
      this.authService.login();
      this.router.navigate(['/admin']);
    }
  }

  ngOnDestroy() {
    this.tokenChangedSubscription.unsubscribe();
  }
}
