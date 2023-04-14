import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class BorneService {

  
  constructor(private http: HttpClient) {

  }
  public getBornes() {
    return this.http.get(AppSettings.APP_URL + "/api/bornes");

  }
}
