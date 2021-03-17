export interface AdminPlayerApi {
    id: number
    name: string
    players: PlayerApi[]
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
