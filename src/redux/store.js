import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import Reducers from "./reducers";

import * as Actions from './actions'

let store = createStore(
    Reducers,
    composeWithDevTools(
        applyMiddleware(thunk),// 允许我们 dispatch() 函数
    )
);
export default store;
console.log('初始化state树', store.getState())
const unsubscribe = store.subscribe(() =>
    console.log('store监听state树', store.getState())
)
// store.dispatch(Actions.loginActions.demandLogin('Learn about actions'))
// store.dispatch(showUserInfoAction('reducers'))
// store
//   .dispatch(fetchUserInfo('test'))
//   .then(() => console.log(store.getState())
// )