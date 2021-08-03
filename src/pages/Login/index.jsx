import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'
export default class Login extends Component {
    render() {
        return (
            <div className="signIn">
                <form action="#" method="GET" name="signin" />
                <ul>
                    <li><label htmlFor="user_name"><p>昵称</p></label>
                    <input type="text" name="username" id="user_name" /></li>
                </ul>
                <ul>
                    <li><label htmlFor="pwd"><p>密码</p></label>
                    <input type="password" name="pwd" /></li>
                </ul>
                {/* <ul>
                    <li><label htmlFor="avator"><span>上传头像</span></label></li>
                    <li><input type="file" id="avator" /></li>
                </ul> */}
                <ul>
                    <li><input type="submit" value="登录" /></li>
                </ul>
                <ul>
                    <li><NavLink to="/registered"><p>还没有账号,去注册</p></NavLink></li>
                </ul>   
            </div>
        )
    }   
}
