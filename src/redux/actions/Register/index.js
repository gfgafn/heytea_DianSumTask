import { register } from '../../../http/api'
import {
    REGISTER_REQUEST,
    REGISTER_RESPONE
} from '../../constants'

export const registerRequest = (data) => {
    return(
        {
            type: REGISTER_REQUEST,
            data
        }
    )  
}
export const registerResponse = (data) => {
    return(
        {
            type: REGISTER_RESPONE,
            data
        }
    )  
}
export const getRegisterFormData = (RegisterFormData) => {
    return async (dispatch) => {
        dispatch(registerRequest())
        const data  = await register(RegisterFormData);
        dispatch(registerResponse(data));
    }
}