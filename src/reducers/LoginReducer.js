import * as Types from '../actions/ActionTypes';

export const LoginReducer = (data=[], action) => {
    switch (action.type) {
        case Types.LOGIN_SUCCESS:
            return action.receivedData;
        case Types.LOGIN_ERROR:
            return [];
        default:
            return data;
    }
};
