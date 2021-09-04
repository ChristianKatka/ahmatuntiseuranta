import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { InitActions, JobActions, ProductActions } from '../actions';

import { concatMap, map, delay } from 'rxjs/operators';
import { AuthenticatedActions } from '@auth/store/actions';

@Injectable()
export class InitEffects {
  loadApplicationStartData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InitActions.loadApplicationStartData),
      concatMap(() => [
        ProductActions.getAllProducts(),
        JobActions.getAllJobs(),
        InitActions.loadApplicationStartDataSuccess(),
      ])
    )
  );

  loadApplicationStartDataSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InitActions.loadApplicationStartDataSuccess),
      delay(2000),
      map(() => AuthenticatedActions.redirectToAuthenticatedHome())
    )
  );



  constructor(private actions$: Actions) {}
}
