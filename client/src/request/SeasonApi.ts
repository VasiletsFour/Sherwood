export interface SeasonCreate {
    name: string;
}

export interface SeasonApi  extends  SeasonCreate{
    id: number;
    date: number;
    active: boolean
}
