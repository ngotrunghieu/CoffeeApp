import * as Types from './ActionTypes';

const atcLogin = (username, password) => {
    return {
        type: Types.LOGIN,
        username,
        password
    }
};

const actFetchAllTable = () => {
    return{
        type: Types.FETCH_ALL_TABLE
    }
}

export default action = {
    atcLogin,
    actFetchAllTable
}
