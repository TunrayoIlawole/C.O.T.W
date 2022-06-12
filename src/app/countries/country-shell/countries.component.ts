import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Country } from '../country';
import { getCountries, getCurrentCountry, getError, State } from '../state';
import { CountryPageActions } from '../state/actions';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries!: Country[];
  selectedCountry$!: Observable<Country | null | undefined>;
  errorMessage$!: Observable<string>;
  filteredCountries: Country[];
  text: string = '';

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    // subscribe to changes

    this.store.dispatch(CountryPageActions.loadCountries());

    this.store.select(getCountries).subscribe(countries => {
      this.countries = countries
    })

    this.errorMessage$ = this.store.select(getError);

    this.selectedCountry$ = this.store.select(getCurrentCountry);

  }

  countrySelected(country: Country): void {
    this.store.dispatch(CountryPageActions.setCurrentCountry({
      currentCountryId: country.numericCode
    }));
  }

  filterCountries() {
    this.filteredCountries = this.countries.filter(country => country.name.toLowerCase().includes(this.text.toLowerCase()));
  } 

  returnCountries() {
    if (this.text === '') {
      return this.countries;
    } else {
      return this.filteredCountries;
    }
  }


}
