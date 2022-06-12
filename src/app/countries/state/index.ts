import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { CountryState } from './country.reducers';

export interface State extends AppState.State {
    countries: CountryState;
}

const getCountriesFeatureState = createFeatureSelector<CountryState>('countries');

export const getCountries = createSelector(
    getCountriesFeatureState,
    state => state.countries
)

export const getError = createSelector(
    getCountriesFeatureState,
    state => state.error
)

export const getCurrentCountryId = createSelector(
    getCountriesFeatureState,
    state => state.currentCountryId
)

export const getCurrentCountry = createSelector(
    getCountriesFeatureState,
    getCurrentCountryId,
    (state, currentCountryId) => {
        return currentCountryId ? state.countries.find(c => c.numericCode === currentCountryId) : null;
    }
)