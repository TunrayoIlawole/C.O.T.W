export interface Country {
    "name": string,
    "topLevelDomain": string[],
    "alpha2Code": string,
    "alpha3Code": string,
    "callingCodes": number[];
    "capital": string,
    "altSpellings": string[];
    "region": string,
    "subregion": string,
    "population": number;
    "latlng": number[];
    "demonym": string;
    "area": number;
    "gini": number;
    "timezones": string[];
    "borders": string[];
    "nativeName": string,
    "numericCode": string,
    "currencies": Currency[]
    "languages": Language[];
    "translations": Translations;
    "flag": string,
    "regionalBlocs": RegionalBlocs[];
    "cioc": string
}

export interface RegionalBlocs {
    "acronym": string;
    "name": string;
    "otherAcronyms": string[];
    "otherNames": string[];
}

export interface Translations {
    "de": string;
    "es": string;
    "fr": string;
    "ja": string;
    "it": string;
    "br": string;
    "pt": string;
}

export interface Language {
    "iso639_1": string;
    "iso639_2": string;
    "name": string;
    "nativeName": string;
}

export interface Currency {
    "code": string,
    "name": string;
    "symbol": string; 
}