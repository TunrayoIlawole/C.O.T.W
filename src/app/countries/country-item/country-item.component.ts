import { Component, Input, OnInit } from '@angular/core';
import { Country, Language } from '../country';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.css']
})
export class CountryItemComponent implements OnInit {
  @Input() country: Country;
  @Input() index: string;

  constructor() { }

  ngOnInit(): void {
  }

  formatLanguages(languageArray: Language[]) {
    const newlang = languageArray.map(language => language.iso639_2);

    return newlang.join(',');
  }

}
