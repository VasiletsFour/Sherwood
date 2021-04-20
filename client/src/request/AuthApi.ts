export interface ConfirmAgain {
    email: string
}

export interface SignInBody extends ConfirmAgain {
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


