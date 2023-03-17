
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
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
  private jwtHelper = new JwtHelperService();
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
    this.authenticationService.login(user).subscribe({
      next:(data: IToken) =>{this.authenticationService.saveToken(data.token) 
      this.authenticationService.saveRole()},
      error:(err: HttpErrorResponse) => this.notificationService.notify(NotificationType.ERROR, err.error['message']),
      
      complete:()=>{if(this.authenticationService.getRole() == 'ROLE_ADMIN'){
        this.router.navigateByUrl("/admin")
      
      }else{
        this.router.navigateByUrl("/login")
      }}
      
    })
 console.log(this.authenticationService.isUserLoggedIn());
  }
  
}
