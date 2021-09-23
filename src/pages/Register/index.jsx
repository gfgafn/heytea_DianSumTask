import React, { Component } from 'react'
import './index.css'
export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phonenum: '',
            username: '',
            password: '',
            passwordSec: ''
        }
    }
    componentDidUpdate() {
        if(this.props.registerState.registerStatus){
            this.props.history.push('/login')
        }
    }
    getValue(e, name) {
        let data = {}
        data[name] = e.target.value
        this.setState(data)
    }
    checkFormat(data) {
        let reg = /^1[0-9]{10}$/;
        if(reg.test(data.phonenum)) {
            if (data.password === data.passwordSec) {
                let formData = {
                    phonenum: data.phonenum,
                    username: data.username,
                    password: data.password
                }
                // console.log('success输入的号码格式正确且两次密码一致')
                return formData
            } else {
                // console.log('failed输入的号码格式正确但两次密码不一致')
                return false
            }
        }else {
            // console.log('电话号码格式错误')
            return false
        }     
    }
    register() {
        console.log("register")
        let registerFormdata = this.checkFormat(this.state)
        if(registerFormdata){
            this.props.register(registerFormdata)
        }
        console.log(registerFormdata)
    }

    render() {
        console.log('render方法调运时', this.state)
        return (
            <div className="signIn">
                <form action="#" method="post" name="registered" id="registerForm">
                    <ul>
                        <li><label><p>用户名</p>
                            <input
                                type="text"
                                name="username"
                                placeholder="请输入用户名"
                                onChange={(e) => { this.getValue(e, 'username') }} />
                        </label>
                        </li>
                    </ul>
                    <ul>
                        <li><label><p>电话号码</p>
                            <input
                                type="text"
                                name="phonenum"
                                placeholder="请输入电话号码"
                                onChange={(e) => { this.getValue(e, 'phonenum') }} />
                        </label>
                        </li>
                    </ul>
                    <ul>
                        <li><label><p>密码</p>
                            <input
                                type="password"
                                name="password"
                                placeholder="请输入密码"
                                onChange={(e) => { this.getValue(e, 'password') }} />
                        </label>
                        </li>
                    </ul>

                    <ul>
                        <li><label><p>确认密码</p>
                            <input
                                type="password"
                                name="passwordSec"
                                placeholder="请再次输入密码"
                                onChange={(e) => { this.getValue(e, 'passwordSec') }} />
                        </label>
                        </li>
                    </ul>
                    <ul>
                        <li><input
                            type="button"
                            value="注册"
                            onClick={() => { this.register() }} />
                        </li>
                    </ul>
                    {/* <ul>
                    <li><input type="checkbox" checked="defaultchecked" />我同意注册条款</li>
                </ul> */}
                </form>
            </div>
        )
    }
}
