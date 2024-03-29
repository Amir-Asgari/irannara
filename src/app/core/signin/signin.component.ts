import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  responseData: string | undefined;
  responseId: string | undefined;
  responseBody: string | undefined;

  constructor(private http: HttpClient) {}

  logincheck() {
    this.http
      .post('https://api.irannara.com/api/v1/Account/UserPassLogin', {
        username: this.username.value,
        password: this.password.value,
      })
      .subscribe(
        ({ title, id, body, password, username }: any) => {
          this.responseData = title;
          this.responseBody = body;
          this.responseId = id;
          this.password.setValue(password);
          this.username.setValue(username);

          console.log(this.responseData);
          console.log(this.username);
        },
        (error) => {
          console.log('Error', error);
        }
      );
  }

  getErrorUserNameMessage() {
    if (this.username.hasError('required')) {
      return 'مقدار  نمی تواند خالی باشد';
    }
    return this.username.hasError('minlength') ? 'Not a valid email' : '';
  }

  getErrorPasswordMessage() {
    if (this.password.hasError('required')) {
      return 'مقدار  نمی تواند خالی باشد';
    }
    return this.password.hasError('minlength')
      ? 'Password must be at least 6 characters'
      : '';
  }

  ngOnInit(): void {}
}
