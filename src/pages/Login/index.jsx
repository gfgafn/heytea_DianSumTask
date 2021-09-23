import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    componentDidUpdate() {
        if(this.props.loginState.loginStatus){
            this.props.history.push('/home')
        }
    }
    getValue(e, name) {
        let data = {}
        data[name] = e.target.value
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
                                onChange={(e) => { this.getValue(e, 'username') }} 
                            />
                        </li>
                    </ul>
                    <ul>
                        <li><label htmlFor="pwd"><p>密码</p></label>
                            <input
                                type="password"
                                name="password"
                                placeholder="请输入密码"
                                onChange={(e) => { this.getValue(e, 'password') }} 
                            />
                        </li>
                    </ul>
                    {/* <ul>
                        <li><label htmlFor="avator"><span>上传头像</span></label></li>
                        <li><input type="file" id="avator" /></li>
                    </ul> */}
                    <ul>
                        <li>
                            <input
                                type="button"
                                value="登录"
                                onClick={() => { this.props.login(this.state) }}
                            />
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
