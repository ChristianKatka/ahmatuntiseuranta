import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { ProductActions } from '../../store/actions';
import { ProductSelectors } from '../../store/selectors';

@Component({
  templateUrl: 'add-product.container.html',
  styleUrls: ['add-product.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductContainerComponent implements OnInit {
  isLoading$ = this.store.select(ProductSelectors.getIsLoading);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  addProduct(product: any) {
    if (product) {
      this.store.dispatch(ProductActions.createProduct({ product }));
    }
  }
}
