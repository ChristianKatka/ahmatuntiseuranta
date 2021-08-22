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
  selector: 'app-add-product-form',
  templateUrl: 'add-product-form.component.html',
  styleUrls: ['add-product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductFormComponent implements OnInit {
  phases = [
    { value: 'notStarted', viewValue: 'Ei alkanut' },
    { value: 'inProgress', viewValue: 'Käynnissä' },
    { value: 'ended', viewValue: 'Päättynyt' },
  ];

  @Input()
  isLoading: boolean | undefined | null;

  @Output()
  addProductFormSubmit = new EventEmitter();

  addProductForm: FormGroup = new FormGroup({
    companyName: new FormControl(),
    address: new FormControl(),
    phase: new FormControl(),
    companyContactInfo: new FormControl(),
    description: new FormControl(),
  });

  submit(): void {
    console.log(this.addProductForm.value);

    this.addProductFormSubmit.emit(this.addProductForm.value);
  }

  ngOnInit() {}
}
