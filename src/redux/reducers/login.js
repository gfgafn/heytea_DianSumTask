import {
    LOGIN_RQUEST,
    LOGIN_RESPONE,
} from "../constants";

const initialState = {
    loginStatus: false
}
const loginState = (state = initialState, action) => {
    const {type} = action
    switch (type) {
        case LOGIN_RQUEST:
            return state
        case LOGIN_RESPONE:
            const {code, status} = action.data
            if (code === 200 || status) {
                return {...state, loginStatus: true}
            } else {
                return state
            }    
        default:
            return state
    }
};
export default loginState;
