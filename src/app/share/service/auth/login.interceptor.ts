import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) {}

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log(
            'status:',
            event.status,
            ', message:',
            event.body.message,
            ', result:',
            event.body.result
          );
        }
      }),
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(error);
      }),
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.authService.login();
        }
      }),
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const responseData: any = event.body;
          if (responseData && event.status === 200) {
            this.router.navigate(['/admin']);
          }
        }
        return event; 
      })
    );
  }
}
