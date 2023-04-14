import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationType } from 'src/app/enum/notification-type.enum';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { TokenService } from 'src/app/services/token/token.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  public editUser = new User() ;
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private tokenService: TokenService
  ) {

  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).pipe().subscribe({
      next: (data: User) => {
        this.editUser = data
        console.log(this.editUser)
      },
      complete: () => console.log('ok')

    }
    )
    console.log(this.tokenService.getEmail());
    
  }
  onEdit(user: User) {
    if(user){
      let tab:string[] = [];
      tab.push(user.role)
      user.roles = tab
    }
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.editUser(id, user).subscribe(
      (data: any) => {
        this.notificationService.notify(NotificationType.SUCCESS, "Votre compte a été mise à jour avec succés")
        this.router.navigateByUrl('/admin');
      }
      ,

      (err: HttpErrorResponse) => this.notificationService.notify(NotificationType.ERROR, err.error['hydra:description'])
    )


  }

}
