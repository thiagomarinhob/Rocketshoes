import { all } from 'redux-saga/effects';

import cart from './cars/sagas';

export default function* rootSaga() {
    return yield all([cart])
}
