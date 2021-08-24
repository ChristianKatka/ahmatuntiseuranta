import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { InitActions, JobActions, ProductActions } from '../actions';

import { mergeMap } from 'rxjs/operators';
import { AuthenticatedActions } from '@auth/store/actions';

@Injectable()
export class InitEffects {
  loadApplicationStartData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InitActions.loadApplicationStartData),
      mergeMap(() => [
        ProductActions.getAllProducts(),
        JobActions.getAllJobs(),
        AuthenticatedActions.redirectToAuthenticatedHome(),
      ])
    )
  );

  constructor(private actions$: Actions) {}
}
