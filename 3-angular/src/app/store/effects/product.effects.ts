import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ProductActions, RouterActions } from '../actions';
import { ProductService } from 'src/app/services/product.service';

import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getAllProducts),
      switchMap(() =>
        this.productService.getAllProducts().pipe(
          map((products) => ProductActions.getAllProductsSuccess({ products })),
          catchError((error: string) => {
            console.log(error);
            return of(ProductActions.getAllProductsFailure({ error }));
          })
        )
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.createProduct),
      switchMap(({ product }) =>
        this.productService.createProduct(product).pipe(
          map((resProduct) =>
            ProductActions.createProductSuccess({ resProduct })
          ),
          catchError((error: string) => {
            console.log(error);
            return of(ProductActions.createProductFailure({ error }));
          })
        )
      )
    )
  );

  createProductSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.createProductSuccess),
      switchMap(() => [RouterActions.navigate({ commands: ['home'] })])
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      switchMap(({ productId }) =>
        this.productService.deleteProduct(productId).pipe(
          map(({ id }) => ProductActions.deleteProductSuccess({ id })),
          catchError((error: string) => {
            console.log(error);
            return of(ProductActions.deleteProductFailure({ error }));
          })
        )
      )
    )
  );

  deleteProductSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.deleteProductSuccess),
      switchMap(() => [RouterActions.navigate({ commands: ['home'] })])
    )
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.updateProduct),
      switchMap(({ product }) =>
        this.productService.updateProduct(product).pipe(
          map((resProduct) =>
            ProductActions.updateProductSuccess({ resProduct })
          ),
          catchError((error: string) => {
            console.log(error);
            return of(ProductActions.updateProductFailure({ error }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
