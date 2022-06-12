import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { Country } from '../country';
import { getCountries, State } from '../state';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  country: Country;
  id: string;
  clicked: boolean = false;

  constructor( private route: ActivatedRoute, private router: Router, private store: Store<State>) { }

  ngOnInit(): void {
    this.route.params
    .pipe(
      tap(param => console.log(param))
    )
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.store.select(getCountries)
        .pipe(
          map(countries => {
            return countries.find(country => country.numericCode === this.id)
          }),
        )
        .subscribe(country => {
          this.country = country;
        })
      }
    )
  }

}
