import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }
  public login (){
    return this.http.post<any>(AppSettings.APP_URL + '/api/login_check', {
    "username": "user@gmail.com",
    "password": "azerty"
  })
  }
  
}
