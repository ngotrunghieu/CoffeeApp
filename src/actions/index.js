import * as Types from './ActionTypes';

export const atcLogin = (username, password) => {
    return {
        type: Types.LOGIN,
        username,
        password
    }
};
