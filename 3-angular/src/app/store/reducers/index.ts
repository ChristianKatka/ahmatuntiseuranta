import {
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import { RouterStateUrl } from '../router-state.serializer';
import * as fromRouter from '@ngrx/router-store';
import * as fromProduct from './product.reducer';

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  product: fromProduct.ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  product: fromProduct.reducer,
};

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('router');

export const getProductState = createFeatureSelector<fromProduct.ProductState>('product');
