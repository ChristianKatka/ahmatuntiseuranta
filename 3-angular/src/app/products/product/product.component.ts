import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  @Input()
  product: any | undefined | null;

  @Output()
  deleteProductSubmitted: EventEmitter<string> = new EventEmitter();

  @Output()
  startEditing = new EventEmitter();

  @Output()
  startFullScreenProductMode = new EventEmitter();

  @Output()
  openBottomSheetAddJobToProduct = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteProduct(productId: string) {
    this.deleteProductSubmitted.next(productId);
  }

  addJobToProduct() {
    this.openBottomSheetAddJobToProduct.emit();
  }
}
