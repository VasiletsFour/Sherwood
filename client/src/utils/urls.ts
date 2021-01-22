import {createPath} from "rd-url-utils";

export const ROOT_URL = createPath("/")
export const HOME_URL = createPath("/home-page")
export const TIME_TABLE_URL = createPath<{ id: string }>("/time-table")
export const TOURNAMENT_TABLE_URL = createPath("/tournament-table")
export const CONFIRM_ACCOUNT_URL = createPath<{ token: string }>("/confirm_account")
export const SCORER_URL = createPath<{ id: string }>("/scorer")
export const TEAMS_URL = createPath("/teams")
export const INSTAGRAM_URL = createPath("https://www.instagram.com/elit_ka__/?igshid=ae3ph64k86z6")
export const YOU_TUBE_URL = createPath("https://www.youtube.com/channel/UCaZY7apNSO6de12P6CBoQHA")
