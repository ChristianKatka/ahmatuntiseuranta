import { ConfirmPasswordContainerComponent } from './components/confirm-password/confirm-password.container';
import { ForgotPasswordContainerComponent } from './components/forgot-password/forgot-password.container';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInContainerComponent } from './components/sign-in/sign-in.container';
import { SignInNewPasswordRequiredContainerComponent } from './components/sign-in-new-password-required/sign-in-new-password-required.container'; // eslint-disable-line
import { SignUpContainerComponent } from './components/sign-up/sign-up.container';
import { SignUpVerificationContainerComponent } from './components/sign-up-verification/sign-up-verification.container';
import { UnauthenticatedGuard, SignUpVerificationGuard } from './guards';

export const authRoutes: Routes = [
  {
    path: 'sign-up',
    canActivate: [UnauthenticatedGuard],
    component: SignUpContainerComponent,
  },

  {
    path: 'sign-up-verification',
    canActivate: [SignUpVerificationGuard],
    component: SignUpVerificationContainerComponent,
  },

  {
    path: 'sign-in',
    canActivate: [UnauthenticatedGuard],
    component: SignInContainerComponent,
  },

  {
    path: 'new-password-required',
    canActivate: [UnauthenticatedGuard],
    component: SignInNewPasswordRequiredContainerComponent,
  },

  {
    path: 'forgot-password',
    canActivate: [UnauthenticatedGuard],
    component: ForgotPasswordContainerComponent,
  },

  {
    path: 'confirm-password',
    canActivate: [UnauthenticatedGuard],
    component: ConfirmPasswordContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
