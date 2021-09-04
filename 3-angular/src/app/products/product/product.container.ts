import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '@app/store/reducers';
import { Store } from '@ngrx/store';
import { ProductActions } from '../../store/actions';
import { ProductSelectors } from '@app/store/selectors';
import { BottomSheetService } from '@app/services/bottom-sheet.service';

@Component({
  templateUrl: './product.container.html',
  styleUrls: ['./product.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductContainerComponent implements OnInit, OnDestroy {
  product$ = this.store.select(ProductSelectors.getSelectedProductEntity);
  editing$ = this.store.select(ProductSelectors.getIsEditing);
  fullScreenProductMode$ = this.store.select(
    ProductSelectors.getIsFullScreenProductMode
  );

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private bottomSheetService: BottomSheetService
  ) {}
  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('productId');
    if (productId) {
      this.store.dispatch(ProductActions.selectProduct({ productId }));
    }
  }
  ngOnDestroy() {
    this.store.dispatch(ProductActions.clearProductSelection());
    this.stopEditing();
  }

  deleteProduct(productId: string) {
    if (productId) {
      this.store.dispatch(ProductActions.deleteProduct({ productId }));
    }
  }

  startEditing() {
    this.store.dispatch(ProductActions.startEditing());
  }
  stopEditing() {
    this.store.dispatch(ProductActions.stopEditing());
  }

  editedProductSubmitted(product: any) {
    this.store.dispatch(ProductActions.updateProduct({ product }));
  }

  onOpenBottomSheetAddJobToProduct() {
    this.bottomSheetService.openAddJobBottomsheet();
  }

  onStartFullScreenProductMode() {
    this.store.dispatch(ProductActions.startFullScreenProductMode());
  }

  onStopFullScreenProductMode() {
    this.store.dispatch(ProductActions.stopFullScreenProductMode());
  }
}
