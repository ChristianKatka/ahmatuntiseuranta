import { createReducer, on, Action } from '@ngrx/store';
import { Product } from 'src/shared/models/product.model';
import { AuthenticatedActions } from '../../../Auth/store/actions';
import { ProductActions } from '../actions';

export interface ProductState {
  entities: { [id: string]: any };
  selectedProductId: string | undefined;
  editing: boolean;
  loading: boolean;
}

export const initialState: ProductState = {
  entities: {},
  selectedProductId: undefined,
  editing: false,
  loading: false,
};

const productReducer = createReducer(
  initialState,
  on(ProductActions.createProduct, (state) => ({ ...state, loading: true })),

  on(ProductActions.createProductSuccess, (state, { resProduct }) => ({
    ...state,
    loading: false,
    entities: {
      ...state.entities,
      [resProduct.id]: {
        ...resProduct,
      },
    },
  })),

  on(ProductActions.getAllProductsSuccess, (state, { products }) => {
    const entities = products.reduce(
      (productEntities: { [id: string]: any }, product: any) => ({
        ...productEntities,
        [product.id]: product,
      }),
      {}
    );
    return {
      ...state,
      entities,
    };
  }),
  on(ProductActions.deleteProductSuccess, (state, { id }) => {
    const entities = {
      ...state.entities,
    };
    delete entities[id];

    return {
      ...state,
      entities,
    };
  }),

  on(ProductActions.selectProduct, (state, { productId }) => ({
    ...state,
    selectedProductId: productId,
  })),
  on(ProductActions.clearProductSelection, (state) => ({
    ...state,
    selectedProductId: undefined,
  })),
  on(ProductActions.startEditing, (state) => ({
    ...state,
    editing: true,
  })),
  on(ProductActions.stopEditing, (state) => ({
    ...state,
    editing: false,
  })),
  on(ProductActions.updateProductSuccess, (state, { resProduct }) => ({
    ...state,
    loading: false,
    editing: false,
    entities: {
      ...state.entities,
      [resProduct.id]: {
        ...resProduct,
      },
    },
  })),
  on(AuthenticatedActions.signOut, (state) => initialState)
);

export const reducer = (state: ProductState | undefined, action: Action) =>
  productReducer(state, action);
