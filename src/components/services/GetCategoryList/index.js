import api from '../../ApiConfig';
import { Apis } from '../../../config';
import { NotificationManager } from 'react-notifications';

const getMainCategoryList = async () => {
    try {
        let result = await api.get(Apis.GetMainCategoryList);
        //this result is linked at localhost 4000 of backend data also u can check this local host on postman by above line api means Apiconfig.js file and this file is just a url as baseURL : API_URL, and rthis url is stated in config folder index.js file as API_URL as localhost:4000 so this port is linked with backed databases and in this folder their is list of Apis from which one Apis is createcategorylist
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
const createMainCategoryList = async (data) => {
    try {
        let result = await api.post(Apis.CreateMainCategoryList,data);
        //this result is linked at localhost 4000 of backend data also u can check this local host on postman by above line api means Apiconfig.js file and this file is just a url as baseURL : API_URL, and rthis url is stated in config folder index.js file as API_URL as localhost:4000 so this port is linked with backed databases and in this folder their is list of Apis from which one Apis is createcategorylist
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default {
    getMainCategoryList,
    createMainCategoryList
}