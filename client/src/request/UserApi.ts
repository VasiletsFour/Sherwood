import {AccountRoleType} from "./AccountApi";

export interface UserApi {
    id: number
    firstname: string
    surname: string
    email: string
    role: AccountRoleType
    ban: boolean
}