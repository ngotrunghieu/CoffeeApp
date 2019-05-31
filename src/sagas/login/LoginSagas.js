import * as Types from '../../actions/ActionTypes';
import {put, takeLatest} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import {Api} from './Api';

const login = function* login(data) {
    try {
        const receivedData = yield Api.loginFromApi(data.username, data.password);
        yield put({type: Types.LOGIN_SUCCESS, receivedData: receivedData});
    }
    catch(error){
        yield put({type: Types.LOGIN_ERROR, error});
    }
};

export const watchLogin = function* watchLogin(){
    yield takeLatest(Types.LOGIN, login);
};

