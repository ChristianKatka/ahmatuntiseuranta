import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: 'add-product.component.html',
  styleUrls: ['add-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent implements OnInit {
  @Input()
  isLoading: boolean | undefined | null;

  @Output()
  addProductFormData = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  addProductFormSubmitted(addProductData: any) {
    this.addProductFormData.next(addProductData);
  }
}
