import * as fromAuth from '../auth/state/auth.reducers';
import * as fromCountries from '../countries/state/country.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
    countries: fromCountries.CountryState;
    user: fromAuth.UserState;
}

export const appReducer: ActionReducerMap<State> = {
    countries: fromCountries.CountryReducer,
    user: fromAuth.AuthReducer
}