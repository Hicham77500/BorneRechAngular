import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { AppSettings } from 'src/app/settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class UserService {




  constructor(private http: HttpClient) {

  }
  public getUsers() {
    return this.http.get(AppSettings.APP_URL + "/api/users");

  }
  public getUser(id: number) {
    return this.http.get<User>(AppSettings.APP_URL + "/api/users/" + id);
  }
  public addUser(user: User) {

    return this.http.post<User | HttpErrorResponse>(AppSettings.APP_URL + '/api/users', user)
  }
  public editUser(id: number, user: User) {
    return this.http.put<User | HttpErrorResponse>(AppSettings.APP_URL + "/api/users/" + id, user);
  }
  public deleteUser(id: number) {
    return this.http.delete<User | HttpErrorResponse>(AppSettings.APP_URL + "/api/users/" + id);
  }
}
