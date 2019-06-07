import {MAIN_URL} from '../../constants.js';// 'http://192.168.43.223:3000';


const loginFromApi = function* loginFromApi(username, password) {
    const url = `${MAIN_URL}/user/${username}`;
    const response = yield fetch(url).then((res) => res.json()).then((responseJson) => {
        return responseJson;
    }).catch(err => console.log(err));

    if (username === response.UserName && password === response.Password) {
        return {
            status: true,
            message: 'username or password correct!',
        }
    } else {
        return {
            status: false,
            message: 'username or password incorrect!',
        }
    }
};

export const Api = {
    loginFromApi
};
