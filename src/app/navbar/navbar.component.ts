import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  // user!: SocialUser;

  // constructor(private socialAuthService: SocialAuthService) {
  //   socialAuthService.authState.subscribe((user) => (this.user = user)); //console.log(user));
  //   // (this.user = user));

  //   // console.log(x));
  // }
  constructor(public auth: AuthServiceService) {}
  logout() {
    this.auth.logOutOfGoogle();
  }
}
