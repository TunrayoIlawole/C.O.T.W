import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "./country";


@Injectable()
export class CountryService {
    private countriesUrl = 'https://restcountries.com/v2/all';
    private countryUrl = 'https://restcountries.com/v2/name/{name}';

    constructor(private http: HttpClient) {}

    public getCountries = (): Observable<Country[]> => {
        return this.http.get<Country[]>(this.countriesUrl);
    }
}