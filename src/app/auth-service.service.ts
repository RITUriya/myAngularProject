import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  //public user!: SocialUser;
  //public isLoggedIn: Subscription;
  user$: Observable<SocialUser>;
  public userName!: SocialUser;
  constructor(private socialAuthService: SocialAuthService) {
    //socialAuthService.authState.subscribe((user) => (this.user = user));
    this.user$ = socialAuthService.authState;
    socialAuthService.authState.subscribe(
      (userName) => (this.userName = userName)
    );
  }

  onClickLoginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  logOutOfGoogle() {
    this.socialAuthService.signOut();
  }
}
