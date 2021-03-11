export interface TeamApi {
    id: number;
    name: string;
    league_id: number;
    league_name?: string;
}

export interface TeamQuery {
    type?: string;
    kind?: Kind;
    league_id?: number
}

export interface TeamDelQuery {
    deleteFromLeague?: boolean
}

export interface CreateTeam {
    name: string
}

export interface AddTeams {
    league_id: number
    teams: number[]
}

type Kind = "asc" | "desc"
