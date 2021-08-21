import { ChangePasswordFormComponent } from './change-password/change-password-form.component';

import { ConfirmPasswordFormComponent } from './confirm-password/confirm-password-form.component';
import { ConfirmPasswordContainerComponent } from './confirm-password/confirm-password.container';

import { ForgotPasswordContainerComponent } from './forgot-password/forgot-password.container';
import { ForgotPasswordFormComponent } from './forgot-password/forgot-password-form.component';

import { SignInContainerComponent } from './sign-in/sign-in.container';
import { SignInFormComponent } from './sign-in/sign-in-form.component';

import { SignInMFARequiredContainerComponent } from './sign-in-mfa-required/sign-in-mfa-required.container';
import { SignInMFARequiredFormComponent } from './sign-in-mfa-required/sign-in-mfa-required-form.component';

import { SignInNewPasswordRequiredContainerComponent } from './sign-in-new-password-required/sign-in-new-password-required.container';
import { SignInNewPasswordRequiredFormComponent } from './sign-in-new-password-required/sign-in-new-password-required-form.component';

import { SignUpVerificationContainerComponent } from './sign-up-verification/sign-up-verification.container';
import { SignUpVerificationFormComponent } from './sign-up-verification/sign-up-verification-form.component';

import { SignUpContainerComponent } from './sign-up/sign-up.container';
import { SignUpFormComponent } from './sign-up/sign-up-form.component';

export const containers: any[] = [
  ForgotPasswordContainerComponent,
  ConfirmPasswordContainerComponent,
  SignInMFARequiredContainerComponent,
  SignInContainerComponent,
  SignInNewPasswordRequiredContainerComponent,
  SignUpContainerComponent,
  SignUpVerificationContainerComponent,
];

export const components: any[] = [
  ChangePasswordFormComponent,
  ConfirmPasswordFormComponent,
  ForgotPasswordFormComponent,
  SignInNewPasswordRequiredFormComponent,
  SignInFormComponent,
  SignInMFARequiredFormComponent,
  SignUpFormComponent,
  SignUpVerificationFormComponent,
];
