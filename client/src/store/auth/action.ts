import {SignInBody, SignUpBody} from "../../request/AuthApi";

export const SIGNUP_NEW_USER = "signup-new-user";
export const LOGIN_USER = "login-user";
export const LOGIN_FB = "login-fb"

interface SignupNewUserAction {
    type: typeof SIGNUP_NEW_USER;
    payload: SignUpBody;
}

interface LoginUserAction {
    type: typeof LOGIN_USER;
    payload: SignInBody;
}

interface LoginFbAction {
    type: typeof LOGIN_FB;
    payload: boolean;
}

export type AuthActionTypes = SignupNewUserAction | LoginUserAction | LoginFbAction;
