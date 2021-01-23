export interface AuthState {
    signUp: boolean | null,
    login: boolean | null
    logoutUser: boolean | null

}

export const initialAuthStateState: AuthState = {
    signUp: null,
    login: null,
    logoutUser: null
};
