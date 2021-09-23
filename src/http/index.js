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
    console.log('Axios-http中的config', config)
    switch (config.url) {
        case '/login' || '/teainfo_all':
            // config.headers.token = localStorage.getItem('token')        
            break;
        case '/user':
            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded', 
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
            break;
        case '/teainfo_bytag':
            
            break;
        default:
            break;
    }
    
    // 将json对象转换为json字符串，以便后端能够接受
    config.data = qs.stringify(config.data)
    return config
})

// 响应拦截
$http.interceptors.response.use(response => {
    let {data} = response
    console.log('Axios-http中的respone', response)
    console.log('Axios-http中的response.data', data)
    if (data.status || data.code === 200) {
        // console.log(dataFromBackstage.data)
        // 没有修改接口之前
        localStorage.setItem('token', data.data)
        // 修改接口之后应该的方式
        // localStorage.setItem('token', data.data.token)
        return data
    } else {
        // Promise.reject(data)
        return data
    }
})

export default $http