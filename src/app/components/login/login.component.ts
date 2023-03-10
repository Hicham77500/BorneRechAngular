
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { IToken } from 'src/app/interfaces/IToken';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
  }
  ngOnInit(): void {
  }

  public onLogin(user: User) {
    this.authenticationService.login(user).subscribe(
      (data: IToken) => {
        console.log(data.token);
        localStorage.setItem('token',data.token);

      })

  }
}
