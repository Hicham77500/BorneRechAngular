import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationType } from 'src/app/enum/notification-type.enum';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  declare users: any;
  declare id: number;
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {

  }
  ngOnInit(): void {

    this.getUsers();
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.remove();
    }

  }
  public getUsers() {
    return this.userService.getUsers().subscribe(
      (data: any) => {
        this.users = data["hydra:member"]
        console.log(data["hydra:member"])
      },
      (err: HttpErrorResponse) => {
        this.notificationService.notify(NotificationType.ERROR, err.error['hydra:description'])
        console.log(err)
      }

    )

  }
  remove() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.deleteUser(id).subscribe(
      () => {
        this.router.navigateByUrl('/admin')
      }
    )
  }
}
