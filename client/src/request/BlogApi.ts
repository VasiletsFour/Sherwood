export interface Blog {
    id: number;
    title: string;
    tags: Array<string>;
    text: string;
    date: number;
    img?: string;
}
