import { getToken, removeToken } from "../utils";

export const expiredRef = (status: number) => getToken() && status === 403 && removeToken();
