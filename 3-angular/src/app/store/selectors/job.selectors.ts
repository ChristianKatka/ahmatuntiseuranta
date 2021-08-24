import { createSelector } from '@ngrx/store';
import { getJobState } from '../reducers';

export const getJobs = createSelector(getJobState, (state) =>
  Object.values(state.entities)
);
export const getSelectedJobId = createSelector(
  getJobState,
  (state) => state.selectedJobId
);

export const getIsEditing = createSelector(
  getJobState,
  (state) => state.editing
);

export const getSelectedJob = createSelector(
  getSelectedJobId,
  getJobs,
  (jobId, jobs) => jobs.filter((job) => job.id === jobId)[0]
);
