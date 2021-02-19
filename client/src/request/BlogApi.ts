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
