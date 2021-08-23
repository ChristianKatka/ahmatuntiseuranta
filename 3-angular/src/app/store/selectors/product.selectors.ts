import { createSelector } from '@ngrx/store';
import { getProductState } from '../reducers';

export const getIsLoading = createSelector(
  getProductState,
  (state) => state.loading
);
export const getSelectedProductFilter = createSelector(
  getProductState,
  (state) => state.filter
);

export const getIsEditing = createSelector(
  getProductState,
  (state) => state.editing
);

export const getSelectedProductId = createSelector(
  getProductState,
  (state) => state.selectedProductId
);

export const getProductEntities = createSelector(
  getProductState,
  getSelectedProductFilter,
  (state, filter) => {
    const products = Object.values(state.entities);
    if (filter === 'showAll') {
      const sortedProductsByCreatedDate = sortByCreatedDate(products);
      return sortedProductsByCreatedDate;
    } else {
      const filteredProducts = products.filter(
        (product) => product.phase === filter
      );
      return sortByCreatedDate(filteredProducts);
    }
  }
);



export const getSelectedProductEntity = createSelector(
  getProductState,
  getProductEntities,
  (state, products) =>
    products.filter((product) => product.id === state.selectedProductId)[0]
);

const sortByCreatedDate = (arrayToSort: any[]) =>
  arrayToSort.sort((n1, n2) => {
    if (n1.createdAt > n2.createdAt) {
      return -1;
    }

    if (n1.createdAt < n2.createdAt) {
      return 1;
    }

    return 0;
  });
