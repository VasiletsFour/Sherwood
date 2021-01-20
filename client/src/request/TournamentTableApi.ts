export interface TournamentTableApi {
    id: number
    name: string
    win: number
    draw: number
    lose: number
    points: number
    goalFor: number
    goalAgainst: number
    previousPosition: number
}