import {SIGNUP_NEW_USER} from "./action";
import {AuthState, initialAuthStateState} from "./state";


export function authReducer(state: AuthState = initialAuthStateState as AuthState, action: any): AuthState {

    switch (action.type) {
        case SIGNUP_NEW_USER:
            return {
                ...state,
                signUp: action.message
            }
    }

    return state;
}