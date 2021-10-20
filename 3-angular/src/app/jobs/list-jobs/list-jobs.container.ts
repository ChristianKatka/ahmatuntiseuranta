import { Component } from '@angular/core';
import { JobActions } from '@app/store/actions';
import { AppState } from '@app/store/reducers';
import { DestinationSelectors } from '@app/store/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list-jobs-container',
  templateUrl: 'list-jobs.container.html',
  styleUrls: ['list-jobs.container.scss'],
})
export class ListJobsContainerComponent {
  jobs$ = this.store.select(DestinationSelectors.getSelectedDestinationJobs);
  constructor(private store: Store<AppState>) {}

  onJobSelect(job: any) {
    this.store.dispatch(JobActions.selectJob({ jobId: job.id }));
  }
}
