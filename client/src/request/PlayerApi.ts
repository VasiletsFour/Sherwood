export interface AdminPlayers {
    id: number
    name: string
    players: PlayerApi[]
}

export interface AdminPlayerApi {
    list: AdminPlayers[]
    count: number
}

export interface PlayerBody {
    name: string
    team_id: number
}

export interface PlayerApi extends PlayerBody {
    id: number
}

export interface PlayerUpdate {
    name?: string
}

export interface PlayerAdminQuery {
    search?: string
    sort?: "asc" | "desc"
}