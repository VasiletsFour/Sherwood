import {LOGIN_USER, SIGNUP_NEW_USER} from "./action";
import {AuthState, initialAuthStateState} from "./state";


export function authReducer(state: AuthState = initialAuthStateState as AuthState, action: any): AuthState {

    switch (action.type) {
        case SIGNUP_NEW_USER:
            return {
                ...state,
                signUp: action.message
            }
        case LOGIN_USER:
            return {
                ...state,
                login: action.message
            }
    }

    return state;
}