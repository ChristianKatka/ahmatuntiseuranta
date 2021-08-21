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
  @Input()
  product: any;

  @Output()
  editedProduct: EventEmitter<Product> = new EventEmitter();

  @Output()
  stopEditing = new EventEmitter();

  companyNameFormControl = new FormControl();
  addressFormControl = new FormControl();
  dateFormControl = new FormControl();
  timeFormControl = new FormControl();
  companyContactInfoFormControl = new FormControl();
  descriptionFormControl = new FormControl();

  productEditForm: FormGroup = new FormGroup({
    companyName: this.companyNameFormControl,
    address: this.addressFormControl,
    date: this.dateFormControl,
    time: this.timeFormControl,
    companyContactInfo: this.companyContactInfoFormControl,
    description: this.descriptionFormControl,
  });

  ngOnChanges() {
    if (this.product) {
      this.companyNameFormControl.setValue(this.product.companyName);
      this.addressFormControl.setValue(this.product.address);
      this.dateFormControl.setValue(this.product.date);
      this.timeFormControl.setValue(this.product.time);
      this.companyContactInfoFormControl.setValue(this.product.companyName);
      this.descriptionFormControl.setValue(this.product.description);
    }
  }

  saveEditForm() {
    if (this.product) {
      // const unitedEditedProduct = {
      //   ...this.product,
      //   headLine: this.headLineFormControl.value,
      //   description: this.descriptionFormControl.value,
      //   price: this.product.price,
      // };
      // this.editedProduct.next(unitedEditedProduct);
    }
  }
}
