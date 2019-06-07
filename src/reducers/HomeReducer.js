import * as Types from '../actions/ActionTypes';

export const HomeReducer = (data=[], action) => {
    switch(action.type){
        case Types.FETCH_ALL_TABLE_SUCCESS:
            return action.receivedData;
        case Types.FETCH_ALL_TABLE_ERROR:
            return [];
        default:
            return data;
    }
}