import { createSelector } from '@ngrx/store';
import { getJobState } from '../reducers';
import { getSelectedProductId } from './product.selectors';

export const getAllJobs = createSelector(getJobState, (state) =>
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

export const getSelectedProductJobs = createSelector(
  getSelectedProductId,
  getAllJobs,
  (productId, jobs) => jobs.filter((job) => job.productId === productId)
);

export const getSelectedJob = createSelector(
  getSelectedJobId,
  getAllJobs,
  (jobId, jobs) => jobs.filter((job) => job.id === jobId)[0]
);
