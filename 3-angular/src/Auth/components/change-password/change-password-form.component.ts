import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
})
export class ChangePasswordFormComponent {
  @Input()
  set inProgress(inProgress: boolean) {
    if (inProgress) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Input() errorCode: string | undefined;

  @Input() userName: string | undefined;

  @Output() submitted = new EventEmitter<any>();

  form: FormGroup = new FormGroup({
    newPassword: new FormControl('', Validators.required),
  });

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
