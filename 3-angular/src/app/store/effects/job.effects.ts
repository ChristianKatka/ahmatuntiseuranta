import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { JobActions, RouterActions } from '../actions';
import { JobService } from 'src/app/services/job.service';

import {
  map,
  switchMap,
  catchError,
  withLatestFrom,
  tap,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { DestinationSelectors, ProductSelectors } from '../selectors';
import { BottomSheetService } from '@app/services/bottom-sheet.service';

@Injectable()
export class JobEffects {
  getJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobActions.getAllJobs),
      switchMap(() =>
        this.jobService.getAllJobs().pipe(
          map((jobs) => JobActions.getAllJobsSuccess({ jobs })),
          catchError((error: string) => {
            console.log(error);
            return of(JobActions.getAllJobsFailure({ error }));
          })
        )
      )
    )
  );

  createJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobActions.createJob),
      switchMap(({ job }) => of(job)),
      withLatestFrom(this.store.select(DestinationSelectors.getSelectedDestinationId)),
      switchMap(([job, destinationId]) =>
        this.jobService.createJob(job, destinationId).pipe(
          map((resJob) => JobActions.createJobSuccess({ resJob })),
          catchError((error: string) => {
            console.log(error);
            return of(JobActions.createJobFailure({ error }));
          })
        )
      )
    )
  );

  // createJobSuccess$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(JobActions.createJobSuccess),
  //     switchMap(() => [RouterActions.navigate({ commands: ['home'] })])
  //   )
  // );

  deleteJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobActions.deleteJob),
      switchMap(({ jobId }) =>
        this.jobService.deleteJob(jobId).pipe(
          map(({ id }) => JobActions.deleteJobSuccess({ id })),
          catchError((error: string) => {
            console.log(error);
            return of(JobActions.deleteJobFailure({ error }));
          })
        )
      )
    )
  );

  // deleteJobSuccess$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(JobActions.deleteJobSuccess),
  //     switchMap(() => [RouterActions.navigate({ commands: ['home'] })])
  //   )
  // );

  updateJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobActions.updateJob),
      switchMap(({ job }) =>
        this.jobService.updateJob(job).pipe(
          map((resJob) => JobActions.updateJobSuccess({ resJob })),
          catchError((error: string) => {
            console.log(error);
            return of(JobActions.updateJobFailure({ error }));
          })
        )
      )
    )
  );
  updateJobSuccessCloseBottomSheet$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(JobActions.updateJobSuccess),
        tap(() => this.bottomSheetService.closeJobBottomsheet())
      ),
    { dispatch: false }
  );

  selectJobOpenBottomSheet$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(JobActions.selectJob),
        tap(() => this.bottomSheetService.openJobBottomsheet())
      ),
    { dispatch: false }
  );

  deleteJobSuccesCloseBottomSheet$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(JobActions.deleteJobSuccess),
        tap(() => this.bottomSheetService.closeAddJobBottomsheet())
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private jobService: JobService,
    private bottomSheetService: BottomSheetService,
    private store: Store
  ) {}
}
