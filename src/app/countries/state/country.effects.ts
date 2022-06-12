import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { CountryService } from "../country.service";
import { CountryPageActions, CountryApiActions } from "./actions";



@Injectable()
export class CountryEffects {
    constructor( private actions$: Actions, private countryService: CountryService ) {}

    getCountries$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CountryPageActions.loadCountries),
            mergeMap(() => {
                return this.countryService.getCountries()
                .pipe(
                    map(countries => CountryApiActions.loadCountriesSuccess( {countries} )),
                    catchError(error => of(CountryApiActions.loadCountriesFailure({ error })))

                )
            })
        )
    });
}