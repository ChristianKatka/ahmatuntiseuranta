import { createReducer, on, Action } from '@ngrx/store';
import { AuthenticatedActions } from '../../../Auth/store/actions';
import { DestinationActions } from '../actions';

export interface DestinationState {
  entities: { [id: string]: any };
  selectedDestinationId: string | undefined;
  editing: boolean;
  loading: boolean;
}

export const initialState: DestinationState = {
  entities: {},
  selectedDestinationId: undefined,
  editing: false,
  loading: false,
};

const destinationReducer = createReducer(
  initialState,
  on(DestinationActions.createDestination, (state) => ({ ...state, loading: true })),

  on(DestinationActions.createDestinationSuccess, (state, { resDestination }) => ({
    ...state,
    loading: false,
    entities: {
      ...state.entities,
      [resDestination.id]: {
        ...resDestination,
      },
    },
  })),

  on(DestinationActions.getAllDestinationsSuccess, (state, { destinations }) => {
    const entities = destinations.reduce(
      (destinationEntities: { [id: string]: any }, destination: any) => ({
        ...destinationEntities,
        [destination.id]: destination,
      }),
      {}
    );
    return {
      ...state,
      entities,
    };
  }),
  on(DestinationActions.deleteDestinationSuccess, (state, { id }) => {
    const entities = {
      ...state.entities,
    };
    delete entities[id];

    return {
      ...state,
      entities,
    };
  }),

  on(DestinationActions.selectDestination, (state, { destinationId }) => ({
    ...state,
    selectedDestinationId: destinationId,
  })),

  on(DestinationActions.clearDestinationSelection, (state) => ({
    ...state,
    selectedDestinationId: undefined,
  })),
  on(DestinationActions.startEditing, (state) => ({
    ...state,
    editing: true,
  })),
  on(DestinationActions.stopEditing, (state) => ({
    ...state,
    editing: false,
  })),
  on(DestinationActions.updateDestinationSuccess, (state, { resDestination }) => {

    return {
      ...state,
      loading: false,
      editing: false,
      entities: {
        ...state.entities,
        [resDestination.id]: {
          ...resDestination,
        },
      },
    };
  }),
  on(AuthenticatedActions.signOut, (state) => initialState)
);

export const reducer = (state: DestinationState | undefined, action: Action) =>
  destinationReducer(state, action);
