import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-destination-form',
  templateUrl: 'add-destination-form.component.html',
  styleUrls: ['add-destination-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddDestinationFormComponent implements OnInit {
  @Input()
  isLoading: boolean | undefined | null;

  @Output()
  addDestinationFormSubmit = new EventEmitter();

  addDestinationForm: FormGroup = new FormGroup({
    address: new FormControl('', Validators.required),
  });

  submit(): void {
    this.addDestinationFormSubmit.emit(this.addDestinationForm.value);
  }

  ngOnInit() {}
}
