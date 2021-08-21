import { AuthSignUpActions } from '@auth/store/actions';
import { AuthSignUpSelectors } from '@auth/store/selectors';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthExtendedAppState } from '@auth/store/reducers';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './sign-up.container.html',
})
export class SignUpContainerComponent {
  isSignUpCommunicating$: Observable<boolean> = this.store.select(
    AuthSignUpSelectors.getIsSignUpCommunicating
  );
  isInvalidParameter$: Observable<boolean> = this.store.select(
    AuthSignUpSelectors.getIsInvalidParameter
  );
  usernameExists$: Observable<boolean> = this.store.select(
    AuthSignUpSelectors.getSignUpUserNameExists
  );
  username$: Observable<string | undefined> = this.store.select(
    AuthSignUpSelectors.getSignUpUsername
  );

  constructor(private store: Store<AuthExtendedAppState>) {}

  onSignUpDataSubmitted(userData: {
    username: string;
    givenName: string;
    familyName: string;
    passwords: { password: string; passwordConfirm: string };
  }) {
    this.store.dispatch(
      AuthSignUpActions.signUp({
        username: userData.username,
        password: userData.passwords.password,
        givenName: userData.givenName,
        familyName: userData.familyName,
        email: userData.username,
      })
    );
  }
}
