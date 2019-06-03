const mainUrl = 'http://192.168.1.4:3000';


const loginFromApi = function* loginFromApi(username, password) {
    const url = `${mainUrl}/user/${username}`;
    // const response = yield fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: '',
    // });
    // console.log('res:' + JSON.stringify(response));
    // return response;
    const response = yield fetch(url).then((res) => res.json()).then((responseJson) => {
        return responseJson;
    }).catch(err => console.log(err));
    // console.log(`res from API: ${JSON.stringify(response)}`);
    // console.log(`username: ${username} -- ${response.UserName}`);
    // console.log(`password: ${password} -- ${response.Password}`);

    if (username === response.UserName && password === response.Password) {
        console.log(`success`);
        return {
            status: true,
            message: 'username or password correct!',
        }
    } else {
        console.log(`fail`);
        return {
            status: false,
            message: 'username or password incorrect!',
        }
    }
};

export const Api = {
    loginFromApi
};
