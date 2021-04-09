export interface TimeTableUpdate {
    place_id?: number
    status?: string
    date?: number
}

interface TimeTable {
    id: number;
    host: TimeTableTeam
    guest: TimeTableTeam;
    tour: string;

}

export interface TimeTableAdminApi extends TimeTable {
    place?: TimeTableTeam
    status?: string
    date?: number
}

export interface TimeTableApi extends TimeTable {
    place: TimeTableTeam
    status: string
    date: number
}

interface TimeTableTeam {
    id: number,
    name: string
}

export interface TimeTableCreate {
    league_id: number
}

