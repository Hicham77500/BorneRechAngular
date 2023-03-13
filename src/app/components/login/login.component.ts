
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationType } from 'src/app/enum/notification-type.enum';
import { IToken } from 'src/app/interfaces/IToken';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { NotificationService } from 'src/app/services/notification/notification.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private notificationService: NotificationService
  ) {

  }
  ngOnInit(): void {
    console.log(this.authenticationService.isUserLoggedIn());
     
  }

  public onLogin(user: User) {
    this.authenticationService.login(user).subscribe(
      (data: IToken) =>this.authenticationService.saveToken(data.token) 
      
      ,
      (err: HttpErrorResponse) => this.notificationService.notify(NotificationType.ERROR, err.error['message'])
    )
 console.log(this.authenticationService.isUserLoggedIn());
  }
}
