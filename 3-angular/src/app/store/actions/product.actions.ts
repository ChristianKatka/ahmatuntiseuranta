import { createAction, props } from '@ngrx/store';
import { Product, ProductDraft } from 'src/shared/models/product.model';

// GET ALL
export const getAllProducts = createAction('[Product] Get All Products');
export const getAllProductsSuccess = createAction(
  '[Product] Get All Products Success',
  props<{ products: Product[] }>()
);
export const getAllProductsFailure = createAction(
  '[Product] Get All Products Failure',
  props<{ error: string }>()
);

// CREATE
export const createProduct = createAction(
  '[Product] Create Product',
  props<{ product: any }>()
);
export const createProductSuccess = createAction(
  '[Product] Create Product Success',
  props<{ resProduct: any }>()
);
export const createProductFailure = createAction(
  '[Product] Create Product Failure',
  props<{ error: string }>()
);

// START EDITING
export const startEditing = createAction('[Product] Start Editing');
// STOP EDITING
export const stopEditing = createAction('[Product] Stop Editing');

// UPDATE
export const updateProduct = createAction(
  '[Product] Update Product',
  props<{
    product: Product;
  }>()
);
export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{ resProduct: Product }>()
);
export const updateProductFailure = createAction(
  '[Product] Update Product Failure',
  props<{ error: string }>()
);

// SELECT
export const selectProduct = createAction(
  '[Product] Select Product',
  props<{ productId: string }>()
);
export const clearProductSelection = createAction(
  '[Product] Clear Product Selection'
);

// DELETE
export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ productId: string }>()
);
export const deleteProductSuccess = createAction(
  '[Product] Delete Product Success',
  props<{ id: string }>()
);
export const deleteProductFailure = createAction(
  '[Product] Delete Product Failure',
  props<{ error: string }>()
);

// FILTER
export const changeProductFilter = createAction(
  '[Product] Change Product Filter',
  props<{ productFilter: 'showAll' | 'notStarted' | 'inProgress' | 'ended' }>()
);
