import { createReducer, on, Action } from '@ngrx/store';
import { AuthenticatedActions } from '../../../Auth/store/actions';
import { JobActions } from '../actions';

export interface JobState {
  entities: { [id: string]: any };
  selectedJobId: string | undefined;
  editing: boolean;
  loading: boolean;
}

export const initialState: JobState = {
  entities: {},
  selectedJobId: undefined,
  editing: false,
  loading: false,
};

const jobReducer = createReducer(
  initialState,
  on(JobActions.createJob, (state) => ({ ...state, loading: true })),

  on(JobActions.createJobSuccess, (state, { resJob }) => ({
    ...state,
    loading: false,
    entities: {
      ...state.entities,
      [resJob.id]: {
        ...resJob,
      },
    },
  })),

  on(JobActions.getAllJobsSuccess, (state, { jobs }) => {
    const entities = jobs.reduce(
      (jobEntities: { [id: string]: any }, job: any) => ({
        ...jobEntities,
        [job.id]: job,
      }),
      {}
    );
    return {
      ...state,
      entities,
    };
  }),
  on(JobActions.deleteJobSuccess, (state, { id }) => {
    const entities = {
      ...state.entities,
    };
    delete entities[id];

    return {
      ...state,
      entities,
    };
  }),

  on(JobActions.selectJob, (state, { jobId }) => ({
    ...state,
    selectedJobId: jobId,
  })),

  on(JobActions.clearJobSelection, (state) => ({
    ...state,
    selectedJobId: undefined,
  })),
  on(JobActions.startEditing, (state) => ({
    ...state,
    editing: true,
  })),
  on(JobActions.stopEditing, (state) => ({
    ...state,
    editing: false,
  })),
  on(JobActions.updateJobSuccess, (state, { resJob }) => ({
    ...state,
    loading: false,
    editing: false,
    entities: {
      ...state.entities,
      [resJob.id]: {
        ...resJob,
      },
    },
  })),
  on(AuthenticatedActions.signOut, (state) => initialState)
);

export const reducer = (state: JobState | undefined, action: Action) =>
  jobReducer(state, action);
