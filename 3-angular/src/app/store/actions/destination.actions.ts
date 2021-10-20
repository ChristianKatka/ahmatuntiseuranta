import { createAction, props } from '@ngrx/store';

// GET ALL
export const getAllDestinations = createAction('[Destination] Get All Destinations');
export const getAllDestinationsSuccess = createAction(
  '[Destination] Get All Destinations Success',
  props<{ destinations: any[] }>()
);
export const getAllDestinationsFailure = createAction(
  '[Destination] Get All Destinations Failure',
  props<{ error: string }>()
);

// CREATE
export const createDestination = createAction(
  '[Destination] Create Destination',
  props<{ destination: any }>()
);
export const createDestinationSuccess = createAction(
  '[Destination] Create Destination Success',
  props<{ resDestination: any }>()
);
export const createDestinationFailure = createAction(
  '[Destination] Create Destination Failure',
  props<{ error: string }>()
);

// START EDITING
export const startEditing = createAction('[Destination] Start Editing');
// STOP EDITING
export const stopEditing = createAction('[Destination] Stop Editing');

// UPDATE
export const updateDestination = createAction(
  '[Destination] Update Destination',
  props<{
    destination: any;
  }>()
);
export const updateDestinationSuccess = createAction(
  '[Destination] Update Destination Success',
  props<{ resDestination: any }>()
);
export const updateDestinationFailure = createAction(
  '[Destination] Update Destination Failure',
  props<{ error: string }>()
);

// SELECT
export const selectDestination = createAction(
  '[Destination] Select Destination',
  props<{ destinationId: string }>()
);
export const clearDestinationSelection = createAction('[Destination] Clear Destination Selection');

// DELETE
export const deleteDestination = createAction(
  '[Destination] Delete Destination',
  props<{ destinationId: string }>()
);
export const deleteDestinationSuccess = createAction(
  '[Destination] Delete Destination Success',
  props<{ id: string }>()
);
export const deleteDestinationFailure = createAction(
  '[Destination] Delete Destination Failure',
  props<{ error: string }>()
);
