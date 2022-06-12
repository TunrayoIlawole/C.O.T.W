import { User } from "../user.model";
import * as AuthActions from "./auth.actions";

export interface UserState {
    user: User;
    authError: string;
    loading: boolean;
}

const initialState: UserState = {
    user: null,
    authError: null,
    loading: false
}

export function AuthReducer(state = initialState, action): UserState {
    switch (action.type) {
        case AuthActions.AUTHENTICATE_SUCCESS:
            // eslint-disable-next-line no-case-declarations
            const user = new User(action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate);
            return {
                ...state,
                authError: null,
                user: user,
                loading: false
            };
        case AuthActions.LOGOUT:
            return {
                ...state,
                user: null
            };
        case AuthActions.LOGIN_START:
        case AuthActions.SIGNUP_START:
            return {
                ...state,
                authError: null,
                loading: true
            };
        case AuthActions.AUTHENTICATE_FAIL:
            return {
                ...state,
                user: null,
                authError: action.payload,
                loading: false
            }
        case AuthActions.CLEAR_ERROR:
            return {
                ...state,
                authError: null
            }
        default:
            return state;
    }
}