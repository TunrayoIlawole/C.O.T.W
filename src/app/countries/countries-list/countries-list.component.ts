import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country, Language } from '../country';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesListComponent implements OnInit {
  @Input() countries!: Country[];
  @Input() errorMessage!: string;
  @Input() selectedCountry!: Country;

  @Output() countryWasSelected = new EventEmitter<Country>();

  constructor() { }

  ngOnInit(): void {
  }

  countrySelected(country: Country): void {
    this.countryWasSelected.emit(country);
  }


}
