export interface Source {
    id?: string;
    name?: string;
}

export interface News {
    source?: Source;
    author?: any;
    title?: string;
    description?: string;
    url?: string;
    urlToImage?: string;
    publishedAt?: Date;
    content?: string;
}
