export interface BlogCreate {
    title: string;
    tags: Array<string>;
    text: string;
}

export interface Blog extends BlogCreate {
    id: number;
    date: number;
    img?: string;
}

export interface BlogQuery {
    beforeDate?: string
    fromDate?: string
    search?: string
    tags?: Array<string>
}
