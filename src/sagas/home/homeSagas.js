import * as Types from '../../actions/ActionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';

const fetchAllTable = function* fetchAllTable(){
    try{
        const receivedData = yield Api.fetchAllTableFromApi();
        yield put({type: Types.FETCH_ALL_TABLE_SUCCESS, receivedData}); 
    }catch(err){
        yield put({type: Types.FETCH_ALL_TABLE_ERROR, err});
    }
}

export const watchFetchAllTable = function* watchFetchAllTable(){
    yield takeLatest(Types.FETCH_ALL_TABLE, fetchAllTable);
}