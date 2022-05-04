import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { SEARCH_KEY, searchReducer, SearchState } from './search';

export interface State {
  [SEARCH_KEY]: SearchState;
}

export const reducers: ActionReducerMap<State> = {
  [SEARCH_KEY]: searchReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
