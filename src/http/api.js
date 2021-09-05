import $http from './index'

// function register (data){ return $http.post('/register', data) }
// const rigister = (data) => { return $http.post('/register', data) }
export const register = data => $http.post('/register', data)
export const login = data => $http.post('/login', data)
export const userInfo = data => $http.get('/user', data)
export const getAllTea = data => $http.post('/teainfo_all', data)
export const getTeainfoBbyTag = data => $http.post('/teainfo_bytag',data)
export const getTeaInfo_tags = data => $http.post('/teainfo_tags',data)
export const placeOrder = data => $http.post('/order',data)
export const historyOrder = data => $http.post('/history_order', data)
export const pay = data => $http.post('/pay', data)