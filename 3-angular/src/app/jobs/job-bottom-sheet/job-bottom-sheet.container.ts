import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { JobActions } from '@app/store/actions';
import { AppState } from '@app/store/reducers';
import { JobSelectors } from '@app/store/selectors';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: 'job-bottom-sheet.container.html',
  styleUrls: ['job-bottom-sheet.container.scss'],
})
export class JobBottomSheetContainerComponent implements OnInit, OnDestroy {
  selectedJob$ = this.store.select(JobSelectors.getSelectedJob);
  editing$ = this.store.select(JobSelectors.getIsEditing);

  constructor(
    private bottomSheetRef: MatBottomSheetRef<JobBottomSheetContainerComponent>,
    private store: Store<AppState>
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.store.dispatch(JobActions.clearJobSelection());
    this.store.dispatch(JobActions.stopEditing());
  }

  close() {
    this.bottomSheetRef.dismiss();
  }

  onStartEditingJob() {
    this.store.dispatch(JobActions.startEditing());
  }

  editedJobSubmitted(job: any) {
    this.store.dispatch(JobActions.updateJob({ job }));
  }

  deleteJob(job: any) {
    this.store.dispatch(JobActions.deleteJob({ jobId: job.id }));
  }
}
