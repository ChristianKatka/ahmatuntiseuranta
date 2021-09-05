import { createAction } from '@ngrx/store';

// Load ALL
export const loadApplicationStartData = createAction(
  '[Init] Load Application Start Data'
);

export const loadApplicationStartDataSuccess = createAction(
  '[Init] Load Application Start Data Success'
);


export const stillLoading = createAction(
  '[Init] Still Loading'
);