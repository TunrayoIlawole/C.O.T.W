import { createAction, props } from "@ngrx/store";

export const setCurrentCountry = createAction(
    '[Country Page] Set Current Country',
    props<{ currentCountryId: string }>()
)

export const clearCurrentCountry = createAction(
    '[Country Page] Clear Current Country'
)

export const loadCountries = createAction(
    '[Country Page] Load Country'
)