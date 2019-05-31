import {fork, all} from 'redux-saga/effects';
import {watchLogin} from './login/LoginSagas';

const rootSaga = function* rootSaga() {
    yield all([
        fork(watchLogin),
    ]);
};

export default rootSaga;
