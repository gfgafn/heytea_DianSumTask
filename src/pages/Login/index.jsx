import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { login, userInfo } from '../../http/api'
import './index.css'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    getUserInfo(headers) {
        const user = {
            username:'',
            avator:''                        
        }
        userInfo(headers).then(res => {
            user.username = res.data.username
            user.avator = res.data.img
        })
        console.log(user)
    }
    login() {
        // console.log(this.state)
        // $http.post('https://www.fastmock.site/mock/b51d52f417e389dc24af7a14eae70d5f/heytea/login',this.state).then(res=>{
        // console.log(res)
        login(this.state).then(res => {
            // 请求成功，存储token并跳转到首页
            localStorage.setItem('token', res.data)
            let headers = {}
            this.getUserInfo(headers)
            // this.props.history.push('/home')
        })
    }
    getValue(e, name) {
        // console.log(e.target.value)
        let data = {}
        data[name] = e.target.value
        // console.log(data)
        this.setState(data)
    }
    render() {
        return (
            <div className="signIn">
                <form method="get" name="signin">
                    <ul>
                        <li><label htmlFor="user_name"><p>用户名</p></label>
                            <input
                                type="text"
                                name="username"
                                id="user_name"
                                placeholder="请输入用户名"
                                onChange={(e) => { this.getValue(e, 'username') }} />
                        </li>
                    </ul>
                    <ul>
                        <li><label htmlFor="pwd"><p>密码</p></label>
                            <input
                                type="password"
                                name="password"
                                placeholder="请输入密码"
                                onChange={(e) => { this.getValue(e, 'password') }} />
                        </li>
                    </ul>
                    {/* <ul>
                        <li><label htmlFor="avator"><span>上传头像</span></label></li>
                        <li><input type="file" id="avator" /></li>
                    </ul> */}
                    <ul>
                        <li><input
                            type="button"
                            value="登录"
                            onClick={() => { this.login() }} />
                        </li>
                    </ul>
                    <ul>
                        <li><NavLink to="/register"><p>还没有账号,去注册</p></NavLink></li>
                    </ul>
                </form>
            </div>
        )
    }
}
