import {SignInBody, SignUpBody} from "../../request/AuthApi";

export const SIGNUP_NEW_USER = "signup-new-user";
export const LOGIN_USER = "login-user";
export const CONFIRM_USER = "confirm-user"
export const LOGOUT_USER = "logout-user"

interface SignupNewUserAction {
    type: typeof SIGNUP_NEW_USER;
    payload: SignUpBody;
}

interface LoginUserAction {
    type: typeof LOGIN_USER;
    payload: SignInBody;
}

interface ConfirmAccountAction {
    type: typeof CONFIRM_USER;
    payload: string;
}

interface LogoutAction {
    type: typeof LOGOUT_USER;
    payload: string;
}

export type AuthActionTypes = SignupNewUserAction | LoginUserAction | ConfirmAccountAction | LogoutAction;
