export enum LoadingState {
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
};

interface Tweet {
    _id: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
    text: string;
};

export interface TweetsState {
    items: Tweet[];
    loadingState: LoadingState;
};