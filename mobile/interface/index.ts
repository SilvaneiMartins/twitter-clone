export type UserDTO = {
    id: string,
    username: string,
    name: string,
    image?: string,
};


export type ITweetType = {
    id: string,
    content: string,
    user: UserDTO,
    createdAt: string,
    image?: string,
    numberOfComments?: number,
    numberOfRetweets?: number,
    numberOfLikes?: number,
    impressions?: number,
};
