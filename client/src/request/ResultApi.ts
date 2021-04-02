export type resultType = "win" | "draw" | "lose"

interface Team {
    id: number
    name: string
}

interface Place extends Team {
}

interface Result {
    goal_for: number
    status: resultType
    id: number
}

export interface ResultApi {
    id: number
    date: number
    host: Team
    guest: Team
    matchAwayTeams?: Result
    matchHomeTeams?: Result
    place: Place
    tour: number
}

export interface ResultUpdate {
    homeResult: resultType,
    goalHome: number,
    visitorsResult: resultType,
    goalVisitors: number
}

export interface ResultCreate extends ResultUpdate {
    match: number
}

