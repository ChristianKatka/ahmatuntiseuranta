import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/shared/models/product.model';

@Component({
  selector: 'app-product-edit-form',
  templateUrl: './product-edit-form.component.html',
  styleUrls: ['./product-edit-form.component.scss'],
})
export class ProductEditFormComponent implements OnChanges {
  phases = [
    { value: 'notStarted', viewValue: 'Ei alkanut' },
    { value: 'inProgress', viewValue: 'Käynnissä' },
    { value: 'ended', viewValue: 'Päättynyt' },
  ];

  @Input()
  product: any;

  @Output()
  editedProduct: EventEmitter<Product> = new EventEmitter();

  @Output()
  stopEditing = new EventEmitter();

  companyNameFormControl = new FormControl();
  addressFormControl = new FormControl();
  phoneNumberFormControl = new FormControl();
  phaseFormControl = new FormControl();
  companyContactInfoFormControl = new FormControl();
  descriptionFormControl = new FormControl();

  productEditForm: FormGroup = new FormGroup({
    companyName: this.companyNameFormControl,
    phase: this.phaseFormControl,
    phoneNumber: this.phoneNumberFormControl,
    address: this.addressFormControl,
    companyContactInfo: this.companyContactInfoFormControl,
    description: this.descriptionFormControl,
  });

  ngOnChanges() {
    if (this.product) {
      this.companyNameFormControl.setValue(this.product.companyName);
      this.addressFormControl.setValue(this.product.address);
      this.phoneNumberFormControl.setValue(this.product.phoneNumber);
      this.phaseFormControl.setValue(this.product.phase);
      this.companyContactInfoFormControl.setValue(
        this.product.companyContactInfo
      );
      this.descriptionFormControl.setValue(this.product.description);
    }
  }

  saveEditForm() {
    if (this.product) {
      const editedProduct = { ...this.product, ...this.productEditForm.value };
      this.editedProduct.next(editedProduct);
    }
  }
}
