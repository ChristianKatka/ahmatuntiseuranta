import { createSelector } from '@ngrx/store';
import { getDestinationState } from '../reducers';
import { getJobs } from './job.selectors';

const getAmountOfJobsInsideEveryDestination = (
  destinations: any[],
  jobs: any[]
) =>
  destinations.map((destination: any) => {
    const amountOfJobs = jobs.filter(
      (job) => job.destinationId === destination.id
    );
    return { ...destination, amountOfJobs: amountOfJobs.length };
  });
const sortByCreatedDate = (arrayToSort: any[]) =>
  arrayToSort.sort((n1, n2) => {
    if (n1.createdAt > n2.createdAt) {
      return -1;
    }

    if (n1.createdAt < n2.createdAt) {
      return 1;
    }

    return 0;
  });

export const getDestinations = createSelector(
  getDestinationState,
  getJobs,
  (state, jobs) => {
    const destinations = getAmountOfJobsInsideEveryDestination(
      Object.values(state.entities),
      jobs
    );
    return sortByCreatedDate(destinations);
  }
);

export const getSelectedDestinationId = createSelector(
  getDestinationState,
  (state) => state.selectedDestinationId
);

export const getIsEditing = createSelector(
  getDestinationState,
  (state) => state.editing
);

export const getSelectedDestinationEntity = createSelector(
  getSelectedDestinationId,
  getDestinations,
  (destinationId, destinations) =>
    destinations.filter((destination) => destination.id === destinationId)[0]
);

export const getSelectedDestinationJobs = createSelector(
  getSelectedDestinationId,
  getJobs,
  (destinationId, jobs) => {
    return jobs.filter((job) => job.destinationId === destinationId);
  }
);
