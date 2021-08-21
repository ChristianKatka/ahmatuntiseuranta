import { createSelector } from '@ngrx/store';
import { getProductState } from '../reducers';

export const getProductEntities = createSelector(getProductState, (state) =>
  Object.values(state.entities)
);

export const getIsLoading = createSelector(
  getProductState,
  (state) => state.loading
);
export const getIsEditing = createSelector(
  getProductState,
  (state) => state.editing
);

export const getSelectedProductEntity = createSelector(
  getProductState,
  getProductEntities,
  (state, products) =>
    products.filter((product) => product.id === state.selectedProductId)[0]
);
