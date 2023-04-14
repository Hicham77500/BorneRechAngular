
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { NotificationType } from 'src/app/enum/notification-type.enum';
import { IToken } from 'src/app/interfaces/IToken';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { TokenService } from 'src/app/services/token/token.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private notificationService: NotificationService,
    private tokenService:TokenService
  ) {

  }
  ngOnInit(): void {
    this.authenticationService.logOut()

  }

  public onLogin(user: User) {


    this.authenticationService.login(user).subscribe({
      next: (data: IToken) => {
        this.tokenService.saveToken(data.token);
        this.authenticationService.validateToken();
        this.tokenService.setRoles();
      },
      error: (err: HttpErrorResponse) => {
        this.notificationService.notify(NotificationType.ERROR, err.error['message'])
      },

      complete: () => {

        this.router.navigateByUrl("/index")


      }

    })

  }

}
