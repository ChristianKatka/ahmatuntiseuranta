import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product | undefined | null;

  @Output()
  deleteProductSubmitted: EventEmitter<string> = new EventEmitter();

  @Output()
  startEditing = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteProduct(productId: string) {
    this.deleteProductSubmitted.next(productId);
  }
}
