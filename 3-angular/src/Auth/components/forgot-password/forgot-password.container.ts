import { AuthSignInActions } from '@auth/store/actions';
import { AuthSignInSelectors } from '@auth/store/selectors';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthExtendedAppState } from '@auth/store/reducers';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './forgot-password.container.html',
  styleUrls: ['./forgot-password.container.scss'],
})
export class ForgotPasswordContainerComponent {
  username$: Observable<string | undefined> = this.store.select(
    AuthSignInSelectors.getSignInUserName
  );
  isSignInCommunicating$: Observable<boolean> = this.store.select(
    AuthSignInSelectors.getIsSignInCommunicating
  );
  isNewPasswordCodeLimitExceeded$: Observable<boolean> = this.store.select(
    AuthSignInSelectors.getIsNewPasswordCodeLimitExceeded
  );
  isNewPasswordCodeUserNotFound$: Observable<boolean> = this.store.select(
    AuthSignInSelectors.getIsNewPasswordCodeUserNotFound
  );

  constructor(private store: Store<AuthExtendedAppState>) {}

  onNewPasswordRequest(formValue: { username: string }) {
    this.store.dispatch(
      AuthSignInActions.requestNewPasswordCode({ username: formValue.username })
    );
  }
}
