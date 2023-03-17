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
    declare isAdmin:boolean;
    constructor(private authService: AuthenticationService, private notification : NotificationService,private router: Router) { 
      this.isAdmin = this.authService.isUserAdmin()
    }
    canActivate():
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {
        console.log(this.authService.isUserAdmin())
      if (!this.isAdmin) {
      
        this.notification.notify(NotificationType.ERROR,'Vous devez etre administrateur pour accéder a cette page');
        this.router.navigate(['/login']);
        return this.isAdmin;
      }
   
      return this.isAdmin;
      }
      // logged in, so return true
      
      
    
  }