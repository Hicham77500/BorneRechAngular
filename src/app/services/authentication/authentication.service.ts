import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AppSettings } from 'src/app/settings/app.settings';
import { TokenService } from '../token/token.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  private router = inject(Router);
  private jwtHelper = new JwtHelperService();
  
  constructor(private http: HttpClient,private tokenService:TokenService) {

  }
  public register(user: User) {
    return this.http.post<User | HttpErrorResponse>(AppSettings.APP_URL + '/api/users', user)
  }
  public login(user: User) {
    return this.http.post<any>(AppSettings.APP_URL + '/api/login_check', user)
  }

  public logOut() {
 
    localStorage.clear();

  }
  public validateToken(): boolean {

    const tok = this.tokenService.getToken();

    if (!this.jwtHelper.isTokenExpired(tok)) {

      localStorage.setItem('isExpired', 'false')

      return true;
    } else {
      this.logOut();
      return false;
    }

  }
  isLoggedInAsUser(){
    const token = localStorage.getItem('token');
    const isExpired = localStorage.getItem('isExpired')
    if(!!token || !!isExpired){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
  isLoggedInAsAdmin(){
    const token = localStorage.getItem('token');
    const isExpired = localStorage.getItem('isExpired')
    const admin = localStorage.getItem('role')
    if(!token || !isExpired || !admin){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
  isLoggedIn(){
    const token = localStorage.getItem('token');
    const isExpired = localStorage.getItem('isExpired');
    if (!token || !isExpired ) {
      return false;
    }
    return true;
  }
 
}
