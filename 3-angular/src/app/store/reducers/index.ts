import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { RouterStateUrl } from '../router-state.serializer';
import * as fromRouter from '@ngrx/router-store';
import * as fromProduct from './product.reducer';
import * as fromJob from './job.reducer';
import * as fromDestination from './destination.reducer';

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  product: fromProduct.ProductState;
  job: fromJob.JobState;
  destination: fromDestination.DestinationState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  product: fromProduct.reducer,
  job: fromJob.reducer,
  destination: fromDestination.reducer,
};

export const getRouterState =
  createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>(
    'router'
  );

export const getProductState =
  createFeatureSelector<fromProduct.ProductState>('product');
export const getJobState = createFeatureSelector<fromJob.JobState>('job');
export const getDestinationState =
  createFeatureSelector<fromDestination.DestinationState>('destination');
