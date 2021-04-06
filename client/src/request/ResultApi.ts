export type resultType = "win" | "draw" | "lose"

interface Team {
    id: number
    name: string
}

interface Place extends Team {
}

interface Result {
    goal_guest: number
    goal_host: number
    status_host: resultType
    status_guest: resultType
    id: number
}

export interface ResultApi {
    id: number
    date: number
    host: Team
    guest: Team
    matchResult?: Result
    matchAwayTeams?: Result
    matchHomeTeams?: Result
    place: Place
    tour: number
}

export interface ResultUpdate {
    status_host: resultType,
    goal_host: number,
    status_guest: resultType,
    goal_guest: number
}

export interface ResultCreate extends ResultUpdate {
    match_id: number
}

