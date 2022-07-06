import api from '../../ApiConfig';
import { Apis } from '../../../config';
import { NotificationManager } from 'react-notifications';

const createCategoryList = async (data) => {
    try {
        let result = await api.post(Apis.CreateCategoryList,data);
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
const getCategoryList = async () => {
    try {
        let result = await api.get(Apis.GetAllCategoryList);
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

const getUpdateCategoryList = async (data) => {
    try {
        let result = await api.post(Apis.GetUpdateCategoryList,data);
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

// sub categorylist
const createSubCategoryList = async (data) => {
    try {
        let result = await api.post(Apis.CreateSubCategoryList,data);
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

const getSubCategoryList = async () => {
    try {
        let result = await api.get(Apis.GEtAllSubCategoryList);
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

const getUpdateSubList = async (data) => {
    try {
        let result = await api.post(Apis.GetUpdateSubCategoryList,data);
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
const getSubDeleteById = async (id) => {
    try {
        let result = await api.delete(Apis.GetSubDeleteById,{params: {id}});
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

// child category list
const getSelectSubCategory = async (id) => {
    try {
        let result = await api.get(Apis.GetAllSubCategory+ `${id}`);
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
const createChildCategory = async (data) => {
    try {
        let result = await api.post(Apis.CreateChildCategory,data);
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

const getChildCategoryList = async () => {
    try {
        let result = await api.get(Apis.GetAllChildCategoryList);
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
const getChildDeleteById = async (id) => {
    try {
        let result = await api.delete(Apis.GetChildDeleteById,{params: {id}});
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
const getAllSubChildCategory = async (id) => {
    try {
        let result = await api.get(Apis.GetAllSubChildCategory+ `${id}`);
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
    createCategoryList,
    getCategoryList,
    getUpdateCategoryList,
    createSubCategoryList,
    getSubCategoryList,
    getUpdateSubList,
    getSubDeleteById,
    getSelectSubCategory,
    createChildCategory,
    getChildCategoryList,
    getChildDeleteById,
    getAllSubChildCategory
};