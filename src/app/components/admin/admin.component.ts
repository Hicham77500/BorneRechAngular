import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private notificationService: NotificationService,

  ) {

  }


  ngOnInit(): void {
  this.authenticationService.isUserLoggedIn() 
    
    
  }

}
