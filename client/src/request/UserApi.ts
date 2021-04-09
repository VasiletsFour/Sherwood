import {AccountRoleType} from "./AccountApi";

export interface UserApi {
    id: number
    firstname: string
    surname: string
    email: string
    role: AccountRoleType
    ban: boolean
    number?: number
    b_day?: number
}

export interface UserAdminUpdate {
    ban?:boolean
    role?: AccountRoleType
}