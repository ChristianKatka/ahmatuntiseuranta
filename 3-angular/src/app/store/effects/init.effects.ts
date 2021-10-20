import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  DestinationActions,
  InitActions,
  JobActions,
  ProductActions,
} from '../actions';

import {
  concatMap,
  map,
  delay,
  mergeMap,
  takeUntil,
  first,
} from 'rxjs/operators';
import { AuthenticatedActions } from '@auth/store/actions';
import { forkJoin } from 'rxjs';
import { RoutingService } from '@app/services/routing.service';

@Injectable()
export class InitEffects {
  loadApplicationStartData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InitActions.loadApplicationStartData),
      mergeMap(() => {
        const getAllProductsSuccess$ = this.actions$.pipe(
          ofType(ProductActions.getAllProductsSuccess),
          takeUntil(
            this.actions$.pipe(ofType(ProductActions.getAllProductsFailure))
          ),
          first()
        );
        const getAllJobsSuccess$ = this.actions$.pipe(
          ofType(JobActions.getAllJobsSuccess),
          takeUntil(this.actions$.pipe(ofType(JobActions.getAllJobsFailure))),
          first()
        );
        const getAllDestinationsSuccess$ = this.actions$.pipe(
          ofType(DestinationActions.getAllDestinationsSuccess),
          takeUntil(
            this.actions$.pipe(
              ofType(DestinationActions.getAllDestinationsFailure)
            )
          ),
          first()
        );

        const afterSuccesfullyLoadedApplicationWideData$ = forkJoin([
          getAllProductsSuccess$,
          getAllJobsSuccess$,
          getAllDestinationsSuccess$,
        ])
          .pipe(first())
          .subscribe(() => {
            this.routingService.routeToAuthenticatedHome();
          });

        return [
          ProductActions.getAllProducts(),
          JobActions.getAllJobs(),
          DestinationActions.getAllDestinations(),
        ];
      })
    )
  );

  constructor(
    private actions$: Actions,
    private routingService: RoutingService
  ) {}
}
