import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
})
export class ForgotPasswordFormComponent {
  @Input()
  set isSignInCommunicating(signInCommunicating: boolean) {
    if (signInCommunicating) {
      this.forgotPasswordForm.disable();
      this.isCommunicating = true;
    } else {
      this.forgotPasswordForm.enable();
      this.isCommunicating = false;
    }
  }

  @Input()
  username: string | undefined | null;

  @Input()
  isNewPasswordCodeLimitExceeded = false;

  @Input()
  isNewPasswordCodeUserNotFound = false;

  @Output()
  newPasswordCodeRequest: EventEmitter<any> = new EventEmitter();

  isCommunicating = false;

  forgotPasswordForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
  });

  submit() {
    this.newPasswordCodeRequest.next(this.forgotPasswordForm.value);
  }
}
