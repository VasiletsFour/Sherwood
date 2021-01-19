import {createPath} from "rd-url-utils";

export const ROOT_URL = createPath("/home-page")
export const TIME_TABLE_URL = createPath<{ id: string }>("/time-table")
export const INSTAGRAM_URL = createPath("/ins")