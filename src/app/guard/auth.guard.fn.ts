import { Injectable } from "@angular/core";
import { Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication/authentication.service";
import { NotificationService } from "../services/notification/notification.service";
import { NotificationType } from "../enum/notification-type.enum";

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard {
    
    constructor(private authService: AuthenticationService, private notification : NotificationService,private router: Router) { 

    }
    canActivate():
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {
      
   
      return this.isUserAdmin();
      }

      isUserAdmin(){
       return this.authService.isAdmin;
      }
      // logged in, so return true
      
      
    
  }