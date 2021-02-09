import {Token} from "../request/AuthApi"

export const getToken = () => {
    const token = localStorage.getItem("token")

    return token ? JSON.parse(token) : null
}

export const setToken = (token: Token) => localStorage.setItem("token", JSON.stringify(token))
export const removeToken = () => localStorage.removeItem("token")