import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordsErrorStateMatcher } from '../../utils/passwords-error-state-matcher';
import { confirmPasswordsValidator } from './confirm-passwords.validator';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  @Input()
  set isSignUpCommunicating(isSignUpCommunicating: boolean) {
    if (isSignUpCommunicating) {
      this.signUpUserDataForm.disable();
    } else {
      this.signUpUserDataForm.enable();
    }
  }

  @Input()
  isInvalidParameter = false;

  @Input()
  usernameExists = false;

  @Input()
  username: string | undefined | null;

  @Output()
  signUpDataSubmitted: EventEmitter<any> = new EventEmitter();

  @Output()
  dialogTriggered: EventEmitter<string> = new EventEmitter();

  passwordsFormGroup = new FormGroup(
    {
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      passwordConfirm: new FormControl(null, [Validators.required]),
    },
    [confirmPasswordsValidator]
  );

  signUpUserDataForm;

  matcher = new PasswordsErrorStateMatcher();

  constructor() {
    this.signUpUserDataForm = new FormGroup({
      username:  new FormControl(null, [
        Validators.email,
        Validators.required,
      ]),
      givenName: new FormControl('', [Validators.required]),
      familyName: new FormControl('', [Validators.required]),
      passwords: this.passwordsFormGroup,
    });
  }

  submit() {
    this.signUpDataSubmitted.next(this.signUpUserDataForm.value);
  }
}
