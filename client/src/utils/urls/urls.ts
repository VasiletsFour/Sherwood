import {createPath} from "rd-url-utils";

export const ROOT_URL = createPath("/");
export const HOME_URL = createPath("/home-page");
export const TIME_TABLE_URL = createPath<{ id: string }>("/time-table");
export const TOURNAMENT_TABLE_URL = createPath("/tournament-table");
export const CONFIRM_ACCOUNT_URL = createPath<{ token: string }>("/confirm_account");
export const SCORER_URL = createPath<{ id: string }>("/scorer");
export const TEAMS_URL = createPath("/teams");
export const MATCH_RESULT_PAGE = createPath("/match_result");
export const APPLICATION_LIST_PAGE = createPath("/application_list");
export const COMMITTEE_PAGE = createPath("/committee");
export const ACCOUNT_PAGE = createPath("/account");
export const ADMIN_PAGE = createPath("/admin/account");
export const ADMIN_BLOG_PAGE = createPath<{ id: string }>("/admin/blog");
export const ADMIN_SEASON_PAGE = createPath<{ id: string }>("/admin/season");
export const ADMIN_USER_PAGE = createPath<{ id: string }>("/admin/user");
export const ADMIN_LEAGUE_PAGE = createPath<{ id: string }>("/admin/league");
export const ADMIN_TIME_TABLE_CREATE_PAGE = createPath("/admin/time_table/create")
export const ADMIN_TIME_TABLE_UPDATE_PAGE = createPath("/admin/time_table/update")
export const ADMIN_TEAM_PAGE = createPath<{ id: string }>("/admin/team");
export const ADMIN_PLAYER_PAGE = createPath<{ id: string }>("/admin/player");
export const ADMIN_REFEREE_PAGE = createPath("/admin/referee");
export const ADMIN_RESULT_PAGE = createPath("/admin/result")
export const ADMIN_PLACE_PAGE = createPath("/admin/place")
export const INSTAGRAM_URL = createPath("https://www.instagram.com/elit_ka__/?igshid=ae3ph64k86z6");
export const YOU_TUBE_URL = createPath("https://www.youtube.com/channel/UCaZY7apNSO6de12P6CBoQHA");
