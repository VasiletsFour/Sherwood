export interface TeamApi {
    id: number;
    name: string;
    league_id: number;
    league_name: string;
}

export interface TeamQuery {
    type: string;
    kind: Kind;
}

type Kind = "asc" | "desc"