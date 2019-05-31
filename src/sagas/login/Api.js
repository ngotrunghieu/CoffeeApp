const fake = {'username': 'hieunt68', 'password': '123'};
const loginFromApi = function* loginFromApi(username, password) {
    if (username === fake.username && password === fake.password){
        return {
            status: true,
            message: 'username or password correct!'
        }
    }else{
        return{
            status: false,
            message: 'username or password incorrect!'
        }
    }
};

export const Api = {
    loginFromApi
};
