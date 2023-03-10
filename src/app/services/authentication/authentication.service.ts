import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IToken } from 'src/app/interfaces/IToken';
import { User } from 'src/app/models/user';
import { AppSettings } from 'src/app/settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {

  }
  public register(user: User) {
    console.log(user);
    console.log("je suis dans register");
    return this.http.post<any>(AppSettings.APP_URL + '/api/users', user)
  }
  public login(user: User) {
    return this.http.post<IToken>(AppSettings.APP_URL + '/api/login_check', user)
  }

}
