import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IToken } from 'src/app/interfaces/IToken';
import { User } from 'src/app/models/user';
import { AppSettings } from 'src/app/settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // public host = environment.apiUrl;
  declare private token: string;
  declare private loggedInUsername: string;
  private jwtHelper = new JwtHelperService();
  declare private tok: string;
  constructor(private http: HttpClient) {

  }
  public register(user: User) {

    return this.http.post<User | HttpErrorResponse>(AppSettings.APP_URL + '/api/users', user)
  }
  public login(user: User) {
    return this.http.post<any>(AppSettings.APP_URL + '/api/login_check', user)
  }

  public logOut() {
    this.token = '';
    this.loggedInUsername = '';
    //this.tok = ''; 
    //localStorage.removeItem('user');
    localStorage.removeItem('token');
    //localStorage.removeItem('users');
  }
  public saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }
  public addUserToLocalCache(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
  public getUserFromLocalCache(): User {
    return JSON.parse(localStorage.getItem('user')!); /* || '{}' */
  }
  /* Récupère le token  dans le local storage */
  public loadToken(): void {
    this.token != localStorage.getItem('token'); /* || '{}' */
  }
  /* Récupère le TOKEN de la méthode loadToken() pour pouvoir l'utiliser */
  public getToken(): string {
    return this.token;
  }
  public decodeToken(token: string){
    return this.jwtHelper.decodeToken(token);
  }
  public isUserAdmin() :boolean{

    let token = this.getToken()
   if (this.decodeToken(token).roles[0] == 'ROLE_ADMIN') {
    return true
   }
    return false


  }
  /* Vérifie si l'utilisateur est connecté  */
  public isUserLoggedIn(): boolean {

    const tok = this.token;



    if (tok != null && tok !== '') {

      if (this.jwtHelper.decodeToken(tok).username != null || '') {


        if (!this.jwtHelper.isTokenExpired(tok)) {

          this.loggedInUsername = this.jwtHelper.decodeToken(tok).username;
          console.log(this.jwtHelper.decodeToken(tok))
          console.log("Résultat this.loogedInUSername (decoded token) : [ " + this.loggedInUsername + " ] Authentication > isLoggedIn()");
          return true;
        }
      }
    } else {
      this.logOut();
      return false;
    }
    return false;
  }
}
