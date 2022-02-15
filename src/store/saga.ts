import { all } from "redux-saga/effects";
import { watchGetTweets } from "./ducks/tweets/sagas";

export default function* rootSaga() {
    yield all([
        watchGetTweets()
    ])
};
