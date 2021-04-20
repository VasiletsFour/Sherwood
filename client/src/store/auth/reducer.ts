import {CONFIRM_AGAIN, CONFIRM_USER, LOGIN_USER, LOGOUT_USER, SIGNUP_NEW_USER} from "./action";
import {AuthState, initialAuthStateState} from "./state";

export function authReducer(state: AuthState = initialAuthStateState as AuthState, action: any): AuthState {
    switch (action.type) {
        case SIGNUP_NEW_USER:
            return {
                ...state,
                signUp: action.message
            };
        case LOGIN_USER:
            return {
                ...state,
                login: action.message
            };
        case CONFIRM_USER:
            return {
                ...state,
                confirm: action.message
            };
        case LOGOUT_USER:
            return {
                ...state,
                logoutUser: action.message
            };
        case CONFIRM_AGAIN:
            return {
                ...state,
                confirmAgain: action.message
            };
    }

    return state;
}
