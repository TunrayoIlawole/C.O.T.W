import { createReducer, on } from '@ngrx/store';
import { Country } from '../country';
import { CountryApiActions, CountryPageActions } from './actions';

export interface CountryState {
    currentCountryId: string | null;
    countries: Country[];
    error: string;
}

const initialState: CountryState = {
    currentCountryId: null,
    countries: [],
    error: ''
}

export const CountryReducer = createReducer<CountryState>(
    initialState,
    on(CountryPageActions.setCurrentCountry, (state, action):
    CountryState => {
        return {
            ...state,
            currentCountryId: action.currentCountryId
        };
    }),
    on(CountryPageActions.clearCurrentCountry, (state): CountryState => {
        return {
            ...state,
            currentCountryId: null
        }
    }),
    on(CountryApiActions.loadCountriesSuccess, (state, action): CountryState => {
        return {
            ...state,
            countries: action.countries,
            error: ''
        }
    }),
    on(CountryApiActions.loadCountriesFailure, (state, action): CountryState => {
        return {
            ...state,
            countries: [],
            error: action.error
        }
    })
)