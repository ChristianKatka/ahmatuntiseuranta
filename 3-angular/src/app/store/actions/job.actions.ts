import { createAction, props } from '@ngrx/store';

// GET ALL
export const getAllJobs = createAction('[Job] Get All Jobs');
export const getAllJobsSuccess = createAction(
  '[Job] Get All Jobs Success',
  props<{ jobs: any[] }>()
);
export const getAllJobsFailure = createAction(
  '[Job] Get All Jobs Failure',
  props<{ error: string }>()
);

// CREATE
export const createJob = createAction(
  '[Job] Create Job',
  props<{ job: any }>()
);
export const createJobSuccess = createAction(
  '[Job] Create Job Success',
  props<{ resJob: any }>()
);
export const createJobFailure = createAction(
  '[Job] Create Job Failure',
  props<{ error: string }>()
);

// START EDITING
export const startEditing = createAction('[Job] Start Editing');
// STOP EDITING
export const stopEditing = createAction('[Job] Stop Editing');

// UPDATE
export const updateJob = createAction(
  '[Job] Update Job',
  props<{
    job: any;
  }>()
);
export const updateJobSuccess = createAction(
  '[Job] Update Job Success',
  props<{ resJob: any }>()
);
export const updateJobFailure = createAction(
  '[Job] Update Job Failure',
  props<{ error: string }>()
);

// SELECT
export const selectJob = createAction(
  '[Job] Select Job',
  props<{ jobId: string }>()
);
export const clearJobSelection = createAction('[Job] Clear Job Selection');

// DELETE
export const deleteJob = createAction(
  '[Job] Delete Job',
  props<{ jobId: string }>()
);
export const deleteJobSuccess = createAction(
  '[Job] Delete Job Success',
  props<{ id: string }>()
);
export const deleteJobFailure = createAction(
  '[Job] Delete Job Failure',
  props<{ error: string }>()
);
