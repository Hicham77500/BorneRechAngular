import { Component, OnInit } from '@angular/core';
import { IToken } from 'src/app/interfaces/IToken';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {
  }
  ngOnInit(): void {
    
  }


  public onRegister(user: User) { 
    console.log(user);
    console.log("je suis dans onregister");
    
    this.authenticationService.register(user).subscribe(
      (data: any) => {
        console.log('je suis dans subscribe')
        console.log(data);

      })

  }
}
