import axios from 'axios'
import qs from 'qs'
const $http = axios.create({
    // 给后续的请求配置一个原始url  baseurl + url = 最终的请求地址
    // baseURL: 'https://www.fastmock.site/mock/b51d52f417e389dc24af7a14eae70d5f/heytea',
    baseURL: 'http://47.95.11.254:81',
    // 设定的请求超时时间
    timeout: '',
    // 当前请求的默认请求头
    // headers:{}
})

// 请求拦截
$http.interceptors.request.use(config => {
    console.log(config)
    switch (config.url) {
        case '/login'||'/teainfo_all':
            config.headers.token = localStorage.getItem('token')        
            break;
        case '/user':
            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded', 
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
            break;
        case 'teainfo_bytag':
            
            break;
        default:
            break;
    }
    
    // 将json对象转换为json字符串，以便后端能够接受
    config.data = qs.stringify(config.data)
    return config
})

// 响应拦截
$http.interceptors.response.use(res => {
    let dataFromBackstage = res.data
    console.log(dataFromBackstage)
    if (dataFromBackstage.status) {
        // console.log(dataFromBackstage.data)

        return dataFromBackstage
    } else {
        return Promise.reject(dataFromBackstage)
    }
    // if (dataFromBackstage.code === 200) {
    //     return dataFromBackstage.data
    // } else {
    //     return Promise.reject(dataFromBackstage)
    // }
})

export default $http