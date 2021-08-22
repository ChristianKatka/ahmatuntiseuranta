import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Product } from '../../shared/models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  @Input()
  products: any;

  @Output()
  selectedProductFilter = new EventEmitter();

  ngOnInit(): void {}

  filterShowAllProducts() {
    this.selectedProductFilter.emit('showAll');
  }

  filterNotStarted() {
    this.selectedProductFilter.emit('notStarted');
  }
  filterInProgress() {
    this.selectedProductFilter.emit('inProgress');
  }
  filterEnded() {
    this.selectedProductFilter.emit('ended');
  }
}
