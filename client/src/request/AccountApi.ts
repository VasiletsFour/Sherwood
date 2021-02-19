export interface AccountApi {
    id: number;
    email: string;
    player_id: number;
    firstname: string;
    b_day: number;
    surname: string;
    role: AccountRole;
    number: number;
    password: string;
    avatar: string;
}

export type AccountRole = "admin" | "user";
