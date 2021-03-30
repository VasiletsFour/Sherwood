export interface TimeTableApi {
    id: number;
    host: number;
    guest: number;
    tour: string;
    palace?: string
    status?: string
    date?: number
}

export interface TimeTableCreate {
    league_id: number
}
