import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InitActions } from '../store/actions';
import { AuthFeatureState } from '../../Auth/store/reducers';
import { AppState } from '../store/reducers';
import { ProductState } from '@app/store/reducers/product.reducer';

interface ExtendedAppState extends AppState {
  auth: AuthFeatureState;
  product: ProductState;
}

@Component({
  templateUrl: './app-initialization.container.html',
  styleUrls: ['./app-initialization.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppInitializationContainerComponent implements OnInit {
  constructor(private store: Store<ExtendedAppState>) {}

  ngOnInit() {
    setTimeout(() => {
      this.loadData();
    }, 1000);
  }

  loadData() {
    this.store.dispatch(InitActions.loadApplicationStartData());
  }
}
