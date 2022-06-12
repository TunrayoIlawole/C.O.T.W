import { createAction, props } from "@ngrx/store";
import { Country } from "../../country";

export const loadCountriesSuccess = createAction (
    '[Country API] Load Countries Success',
    props<{ countries: Country[] }>()
)

export const loadCountriesFailure = createAction (
    '[Country API] Load Countries Failure',
    props<{ error: string }>()
)