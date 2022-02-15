import { Action } from 'redux';
import { TweetsState, LoadingState } from './contracts/state';

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    GET_TWEETS = 'tweets/GET_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
};

interface SetTweets extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS,
    payload: TweetsState['items']
};

interface SetTweetsLoadingState extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATE,
    payload: LoadingState
};

interface GetTweets extends Action<TweetsActionsType> {
    type: TweetsActionsType.GET_TWEETS
};

export const setTweets = (payload: TweetsState['items']): SetTweets => ({
    type: TweetsActionsType.SET_TWEETS,
    payload
});

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingState => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload
});

export const getTweets = (): GetTweets => ({
    type: TweetsActionsType.GET_TWEETS
});

export type TweetsActions =
  | SetTweets
  | SetTweetsLoadingState
  | GetTweets;
