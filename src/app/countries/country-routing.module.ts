import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { CountriesResolverService } from "./countries-resolver.service";

import { CountryDetailComponent } from "./country-detail/country-detail.component";
import { CountriesComponent } from "./country-shell/countries.component";

const routes: Routes = [
    { path: '', component: CountriesComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: ':id', component: CountryDetailComponent, resolve: [CountriesResolverService] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CountryRoutingModule { }