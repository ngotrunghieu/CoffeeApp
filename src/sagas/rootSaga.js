import {fork, all} from 'redux-saga/effects';
import {watchLogin} from './login/LoginSagas';
import {watchFetchAllTable} from './home/homeSagas';

const rootSaga = function* rootSaga() {
    yield all([
        fork(watchLogin),
        fork(watchFetchAllTable),
    ]);
};

export default rootSaga;
