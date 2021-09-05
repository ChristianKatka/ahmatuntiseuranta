import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { InitActions, JobActions, ProductActions } from '../actions';

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
  // loadApplicationStartData$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(InitActions.loadApplicationStartData),
  //     concatMap(() => [
  //       ProductActions.getAllProducts(),
  //       JobActions.getAllJobs(),
  //       InitActions.loadApplicationStartDataSuccess(),
  //     ])
  //   )
  // );

  // loadApplicationStartDataSuccess$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(InitActions.loadApplicationStartDataSuccess),
  //     delay(2000),
  //     map(() => AuthenticatedActions.redirectToAuthenticatedHome())
  //   )
  // );

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

        const afterSuccesfullyLoadedApplicationWideData$ = forkJoin([
          getAllProductsSuccess$,
          getAllJobsSuccess$,
        ])
          .pipe(first())
          .subscribe(() => {
            this.routingService.routeToAuthenticatedHome();
          });

        return [ProductActions.getAllProducts(), JobActions.getAllJobs()];
      })
    )
  );

  constructor(
    private actions$: Actions,
    private routingService: RoutingService
  ) {}
}
