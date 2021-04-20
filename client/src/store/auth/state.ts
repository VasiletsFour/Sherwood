export interface AuthState {
    signUp: { data?: boolean; err?: string } | null;
    login: { data?: boolean; err?: string } | null;
    confirm: { type: string; message: string } | null;
    logoutUser: boolean | null;
    confirmAgain: { data?: boolean; err?: string } | null
}

export const initialAuthStateState: AuthState = {
    signUp: null,
    login: null,
    confirm: null,
    logoutUser: null,
    confirmAgain:null
};
