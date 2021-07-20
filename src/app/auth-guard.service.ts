import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  // user!: SocialUser;
  constructor(private auth: AuthServiceService, private router: Router) {}

  CanActivate() {
    this.auth.user.map((user) => {
      if (user) return true;

      this.router.navigate(['./login']);
      return false;
    });
  }
}
