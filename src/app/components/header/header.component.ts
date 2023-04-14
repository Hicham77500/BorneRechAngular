import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  declare isLogged: boolean;
  constructor(
    private authenticationService: AuthenticationService
  ) {

  }
  ngOnInit(): void {

    this.isLogged = this.authenticationService.isLoggedIn();
  }

}
