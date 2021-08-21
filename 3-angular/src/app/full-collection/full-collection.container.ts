import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/reducers';
import { ProductActions } from '../store/actions';
import { ProductSelectors } from '../store/selectors';
import { Store } from '@ngrx/store';
@Component({
  templateUrl: 'full-collection.container.html',
  styleUrls: ['full-collection.container.scss'],
})
export class FullCollectionContainerComponent implements OnInit {
  products$ = this.store.select(ProductSelectors.getProductEntities);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
}
