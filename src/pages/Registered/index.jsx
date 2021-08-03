import React, { Component } from 'react'
import RegistrationTerms from './RegistrationTerms'
import './index.css'
export default class Registered extends Component {
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
                    <li><label htmlFor="pwd"><p>确认密码</p></label>
                    <input type="password" name="pwd" /></li>
                </ul>
                <ul>
                    <li><input type="submit" value="注册" /></li>
                </ul>
                {/* <ul>
                    <li><input type="checkbox" checked="defaultchecked" />我同意注册条款</li>
                </ul> */}
            </div>
            
        )
    }
}
