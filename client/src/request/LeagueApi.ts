import {SeasonApi} from "./SeasonApi"

export interface LeagueApi extends SeasonApi {
    leagues: Leagues[]
}

export interface Leagues {
    id: number
    name: string
}

export interface CreateLeagues {
    season_id: number
    count: number
}

export interface UpdateLeagues {
    season_id: number
    name: string
}
