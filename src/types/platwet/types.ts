export type Tweet = {
    id: string;
    content: string;
    userId: string;
    likes_count: number;
    username: string;
};

export type User = {
    id: string;
    username: string;
};