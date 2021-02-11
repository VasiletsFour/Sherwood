export interface AuthState {
    signUp: boolean | null;
    login: { data?: boolean; err?: string } | null;
    confirm: { type: string; message: string } | null;
    logoutUser: boolean | null;
}

export const initialAuthStateState: AuthState = {
    signUp: null,
    login: null,
    confirm: null,
    logoutUser: null
};
