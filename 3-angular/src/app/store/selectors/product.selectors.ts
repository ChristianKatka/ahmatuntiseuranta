import { createSelector } from '@ngrx/store';
import { getProductState } from '../reducers';
import { getDestinations } from './destination.selectors';

const getAmountOfDestinationsInsideEveryProduct = (
  products: any[],
  destinations: any[]
) =>
  products.map((product: any) => {
    const amountOfDestinations = destinations.filter(
      (destination) => destination.productId === product.id
    );
    return { ...product, amountOfDestinations: amountOfDestinations.length };
  });

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

export const getProducts = createSelector(getProductState, (state) =>
  Object.values(state.entities)
);

export const getIsLoading = createSelector(
  getProductState,
  (state) => state.loading
);
export const getSelectedProductFilter = createSelector(
  getProductState,
  (state) => state.filter
);

export const getIsFullScreenProductMode = createSelector(
  getProductState,
  (state) => state.fullScreenProductMode
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
  getDestinations,
  (state, filter, destinations) => {
    const products = getAmountOfDestinationsInsideEveryProduct(
      Object.values(state.entities),
      destinations
    );
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

export const getSelectedProductDestinations = createSelector(
  getSelectedProductId,
  getDestinations,
  (productId, destinations) => {
    return destinations.filter(
      (destination) => destination.productId === productId
    );
  }
);
