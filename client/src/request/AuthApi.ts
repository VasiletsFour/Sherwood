export interface SignInBody {
    email: string;
    password: string;
}

export interface SignUpBody extends SignInBody {
    firstname: string;
    surname: string;
}

export interface Token {
    auth: string;
    ref: string;
}
