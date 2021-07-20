import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  public user!: SocialUser;
  constructor(private socialAuthService: SocialAuthService) {
    socialAuthService.authState.subscribe((user) => (this.user = user));
  }

  onClickLoginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  logOutOfGoogle() {
    this.socialAuthService.signOut();
  }
}
