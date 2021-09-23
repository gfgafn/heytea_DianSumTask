import {
    REGISTER_REQUEST,
    REGISTER_RESPONE
} from '../constants'

const initialState = {
    registerStatus: false
}
const registerState = (state = initialState, action) => {
    const {type} = action
    switch (type) {
        case REGISTER_REQUEST:
            return state
        case REGISTER_RESPONE:
            const {code, status} = action.data
            if (code === 200 || status) {
                return {...state, registerStatus: true}
            } else {
                return state
            }    
        default:
            return state
    }
}
export default registerState;