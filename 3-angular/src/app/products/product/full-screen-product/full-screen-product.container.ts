import { Component, Output, EventEmitter } from '@angular/core';

import { AppState } from '@app/store/reducers';
import { ProductSelectors } from '@app/store/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-full-screen-product-container',
  templateUrl: 'full-screen-product.container.html',
  styleUrls: ['full-screen-product.container.scss'],
})
export class FullScreenProductContainerComponent {
  @Output()
  stopFullScreenProductMode = new EventEmitter();

  jobs$ = this.store.select(ProductSelectors.getSelectedProductJobs);

  rowHeight = '5:1';
  constructor(private store: Store<AppState>) {}

  changeRowHeight(rowHeight: string) {
    this.rowHeight = rowHeight;
  }
}
