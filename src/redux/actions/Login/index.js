import { login } from '../../../http/api'
import {
    LOGIN_RQUEST,
    LOGIN_RESPONE,
} from "../../constants";

export const loginRequest = (data) => {
    return {
        type: LOGIN_RQUEST,
        data
    };
};
export const loginReponse = (data) => {
    return {
        type: LOGIN_RESPONE,
        data
    };
};
export const getLoginFormData = (userandpwdObj) => {
    return async (dispatch) => {
        dispatch(loginRequest())
        const data  = await login(userandpwdObj);
        dispatch(loginReponse(data));
    }
};
