import {MAIN_URL} from '../../constants.js';

const fetchAllTableFromApi = function* fetchAllTableFromApi() {
    const url = `${MAIN_URL}/table`;
    const response = yield fetch(url).then((res) => res.json()).then((responseJson) => {
        let resData = [];
        let responseData = [];
        let previous_floor_id = null;
        let title = null;
        responseJson.forEach(element => {
            if(previous_floor_id !== element.FloorID){
                if (previous_floor_id !== null) {
                    responseData.push({"id": previous_floor_id, "title": title, "data": resData});
                    previous_floor_id = 0;
                    title = null;
                    resData = [];
                }
                previous_floor_id = element.FloorID;
                title = element.FloorName;
                resData.push({"TableID": element.TableID, "TableName": element.TableName})
            }else{
                resData.push({"TableID": element.TableID, "TableName": element.TableName})
            }
        });
        responseData.push({"id": previous_floor_id, "title": title, "data": resData});
        console.log(JSON.stringify(responseData));
        return responseData;
    }).catch(err => console.log(err));
    return yield response ? response : [];
};

export const Api = {
    fetchAllTableFromApi
};