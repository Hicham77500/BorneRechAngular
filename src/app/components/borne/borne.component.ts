import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationType } from 'src/app/enum/notification-type.enum';
import { BorneService } from 'src/app/services/borne/borne.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-borne',
  templateUrl: './borne.component.html',
  styleUrls: ['./borne.component.css']
})
export class BorneComponent implements OnInit {
  declare bornes: any;
  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private bornesService: BorneService
  ) {

  }
  ngOnInit(): void {
  this.getBornes();  
  }

  public getBornes() {
    return this.bornesService.getBornes().subscribe(
      (data: any) => {
        this.bornes = data["hydra:member"]
        console.log(data["hydra:member"])
      },
      (err: HttpErrorResponse) => {
        this.notificationService.notify(NotificationType.ERROR, err.error['hydra:description'])
        console.log(err)
      }

    )

  }
}
