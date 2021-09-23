import { combineReducers } from 'redux'
import registerState from './register'
import loginState from './login'
import showUserInfo from './mine'
const Reducers = combineReducers({
    registerState,
    loginState, 
    showUserInfo,
})
export default Reducers