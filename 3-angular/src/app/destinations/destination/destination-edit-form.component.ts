import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-destination-edit-form',
  templateUrl: './destination-edit-form.component.html',
  styleUrls: ['./destination-edit-form.component.scss'],
})
export class DestinationEditFormComponent implements OnChanges {
  @Input()
  destination: any;

  @Output()
  editedDestination: EventEmitter<any> = new EventEmitter();

  @Output()
  stopEditing = new EventEmitter();

  addressFormControl = new FormControl();

  destinationEditForm: FormGroup = new FormGroup({
    address: this.addressFormControl,
  });

  ngOnChanges() {
    if (this.destination) {
      this.addressFormControl.setValue(this.destination.address);
    }
  }

  submit() {
    if (this.destination) {
      const editedDestination = {
        ...this.destination,
        ...this.destinationEditForm.value,
      };
      this.editedDestination.next(editedDestination);
    }
  }
}
