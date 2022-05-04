import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';

export const SEARCH_KEY = 'search';

export const search = createAction(
  '[SEARCH] change update',
  props<{ update: string }>()
);

export interface SearchState {
  update: string;
}

export const initialState: SearchState = {
  update: ''
};

export const searchReducer = createReducer(
  initialState,
  on(search, (state, action) => ({
    ...state,
    update: action.update
  }))
);

export const featureSelector = createFeatureSelector<SearchState>(SEARCH_KEY);
export const searchSelector = createSelector(
  featureSelector,
  state => state.update
);
