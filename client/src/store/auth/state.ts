export interface AuthState {
    signUp: boolean | null,
    login: boolean | null,
    confirm: string | null
    logoutUser: boolean | null

}

export const initialAuthStateState: AuthState = {
    signUp: null,
    login: null,
    confirm: null,
    logoutUser: null
};
