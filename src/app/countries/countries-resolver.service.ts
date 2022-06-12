import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { Country } from './country';
import { Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import * as fromApp from '../state/app.state';
import * as CountriesApiActions from '../countries/state/actions/country-api.actions';
import * as CountriesPageActions from '../countries/state/actions/country-page.actions'

@Injectable({ providedIn: 'root' })
export class CountriesResolverService implements Resolve<Country[]> {

    constructor(private store: Store<fromApp.State>, private actions$: Actions) {}

    resolve(): any {
        return this.store.select('countries').pipe(
            take(1),
            map(countriesState => {
                return countriesState.countries;
            }),
            switchMap(countries => {
                if (countries.length === 0) {
                    this.store.dispatch(CountriesPageActions.loadCountries());
                    return this.actions$.pipe(
                        ofType(CountriesApiActions.loadCountriesSuccess),
                        take(1)
                    );
                } else {
                    return of(countries);
                }
            }) 
        )
    }
}