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
export class ListUserComponent implements OnInit{
  declare users:any; 
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
    // this.authenticationService.isUserLoggedIn() 
       this.getUsers();
       if (this.id !=null) {
        this.onDeleteUser(this.id)
       }
       
     }
   public getUsers(){
    this.userService.getUsers().subscribe(
     (data: any) =>{ this.users = data["hydra:member"]
      console.log(data["hydra:member"])
         //   //this.router.navigateByUrl('/login');
     },
   
         (err: HttpErrorResponse) => this.notificationService.notify(NotificationType.ERROR, err.error['hydra:description'])
    
    
    )
    
   }
   public onDeleteUser(id: number){
    this.userService.deleteUser(id).subscribe(
      () => {this.notificationService.notify(NotificationType.SUCCESS, "Votre compte a été supprimé avec succés")
      this.router.navigate(['/admin'])}
       ,
    
       (err: HttpErrorResponse) => this.notificationService.notify(NotificationType.ERROR, err.error['hydra:description'])
    )
   }

}
