import { Music } from "./Music";

export interface Author {
    id: number;
    name: string;
    author: string;
    musics: Music[];
}