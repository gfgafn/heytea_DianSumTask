import {
    RQUEST_USER_INFO,
    RECEIVE_USER_INFO,
} from "../constants";

const initialState = {
    username: '昵称', 
    avator: '', 
    loginStatus: false
}
const showUserInfo = (state = initialState, action) => {
    const {type, data} = action
    switch (type) {
        case RQUEST_USER_INFO:
        case RECEIVE_USER_INFO:
            return {...state, ...data, loginStatus: true}
        default:
            return state
    }
};
export default showUserInfo;
