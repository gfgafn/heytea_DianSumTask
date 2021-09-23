import { getUserInfoFromSever } from '../../../http/api'
// 为组件生成action对象
import {
    RQUEST_USER_INFO,
    RECEIVE_USER_INFO,
} from "../../constants";

export const requestUserInfo = (data) => {
    return {
        type: RQUEST_USER_INFO,
        data
    };
};
export const receiveUserInfo = (data) => {
    return {
        type: RECEIVE_USER_INFO,
        data
    };
};
export const showUserInfoAction = () => {
    return (dispatch) => {dispatch(fetchUserInfo())}
};
export const fetchUserInfo = () => {
    return async (dispatch) => {
        // 首次 dispatch：更新应用的 state 来通知
        // API 请求发起了。
        dispatch(requestUserInfo())
        const response  = await getUserInfoFromSever();
        dispatch(receiveUserInfo(response.data));
        // return (dispatch) => {
        //     dispatch(requestUserInfo())
        //     return userInfo()
        //     .then((res) => {
        //         dispatch(receiveUserInfo(res.data))
        //     })
        // }
    }
}