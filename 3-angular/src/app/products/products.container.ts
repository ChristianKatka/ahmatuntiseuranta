import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { AppState } from '../store/reducers';
import { ProductActions } from '../store/actions';
import { ProductSelectors } from '../store/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-products-container',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsContainerComponent implements OnInit {
  products$ = this.store.select(ProductSelectors.getProductEntities);

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {}

  selectedProductFilter(
    productFilter: 'showAll' | 'notStarted' | 'inProgress' | 'ended'
  ) {
    this.store.dispatch(ProductActions.changeProductFilter({ productFilter }));
  }
}
