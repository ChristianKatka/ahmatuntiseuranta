import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { DestinationActions, RouterActions } from '../actions';
import { DestinationService } from 'src/app/services/destination.service';

import {
  map,
  switchMap,
  catchError,
  withLatestFrom,
  tap,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProductSelectors } from '../selectors';
import { BottomSheetService } from '@app/services/bottom-sheet.service';

@Injectable()
export class DestinationEffects {
  getDestination$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DestinationActions.getAllDestinations),
      switchMap(() =>
        this.destinationService.getAllDestinations().pipe(
          map((destinations) =>
            DestinationActions.getAllDestinationsSuccess({ destinations })
          ),
          catchError((error: string) => {
            console.log(error);
            return of(DestinationActions.getAllDestinationsFailure({ error }));
          })
        )
      )
    )
  );

  createDestination$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DestinationActions.createDestination),
      switchMap(({ destination }) => of(destination)),
      withLatestFrom(this.store.select(ProductSelectors.getSelectedProductId)),
      switchMap((destinationAndProductId) =>
        this.destinationService
          .createDestination(
            destinationAndProductId[0],
            destinationAndProductId[1]
          )
          .pipe(
            map((resDestination) =>
              DestinationActions.createDestinationSuccess({ resDestination })
            ),
            catchError((error: string) => {
              console.log(error);
              return of(DestinationActions.createDestinationFailure({ error }));
            })
          )
      )
    )
  );

  // createDestinationSuccess$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(DestinationActions.createDestinationSuccess),
  //     switchMap(() => [RouterActions.navigate({ commands: ['home'] })])
  //   )
  // );

  deleteDestination$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DestinationActions.deleteDestination),
      switchMap(({ destinationId }) =>
        this.destinationService.deleteDestination(destinationId).pipe(
          map(({ id }) => DestinationActions.deleteDestinationSuccess({ id })),
          catchError((error: string) => {
            console.log(error);
            return of(DestinationActions.deleteDestinationFailure({ error }));
          })
        )
      )
    )
  );

  deleteDestinationSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DestinationActions.deleteDestinationSuccess),
      switchMap(() => [RouterActions.navigate({ commands: ['home'] })])
    )
  );

  updateDestination$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DestinationActions.updateDestination),
      switchMap(({ destination }) =>
        this.destinationService.updateDestination(destination).pipe(
          map((resDestination) =>
            DestinationActions.updateDestinationSuccess({ resDestination })
          ),
          catchError((error: string) => {
            console.log(error);
            return of(DestinationActions.updateDestinationFailure({ error }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private destinationService: DestinationService,
    private store: Store
  ) {}
}
