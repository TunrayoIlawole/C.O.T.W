import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from '../countries/country-shell/countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryReducer } from './state/country.reducers';
import { CountryEffects } from './state/country.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CountryRoutingModule } from './country-routing.module';
import { CountryItemComponent } from './country-item/country-item.component';
import { FormsModule } from '@angular/forms';
import { CountryService } from './country.service';



@NgModule({
    declarations: [
      CountriesComponent,
      CountryDetailComponent,
      CountriesListComponent,
      CountryItemComponent
    ],
    imports: [
      CommonModule,
      HttpClientModule,
      CountryRoutingModule,
      FormsModule,
      StoreModule.forFeature('countries', CountryReducer),
      EffectsModule.forFeature([CountryEffects])
    ],
    providers: [CountryService]
})

export class CountryModule { }