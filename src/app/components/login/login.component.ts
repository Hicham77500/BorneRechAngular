import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { AppSettings } from '../../settings/app.settings';

interface loginUser{
  username: string,
  password: string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {
  }
  ngOnInit(): void {
  
    this.onLogin();
    console.log('je suis dans logincomponent');


  }

  public onLogin() {
    this.loginService.login().subscribe(
      (data:any) => {
        console.log(data.token);

      })

  }
}
