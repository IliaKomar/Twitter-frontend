import { takeEvery, call, put } from 'redux-saga/effects';
import { TweetsActionsType, setTweetsLoadingState, setTweets } from './actionCreators';
import { TweetsApi } from './../../../services/api/tweetsApi';
import { LoadingState } from './contracts/state';

function* getTweetsRequest(): any {
    try {
        const items = yield call(TweetsApi.getTweets);
        yield put(setTweets(items));
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    };
};

export function* watchGetTweets() {
    yield takeEvery(TweetsActionsType.GET_TWEETS, getTweetsRequest)
}