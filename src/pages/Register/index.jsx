import React, { Component } from 'react'
import { register } from '../../http/api'

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
    register() {
        this.verifyPassword();
        // console.log(this.state)
        // axios.post('https://www.fastmock.site/mock/b51d52f417e389dc24af7a14eae70d5f/heytea/login',this.state).then(res=>{
        // register(this.state).then(res => {
            // let dataFromBackstage = res.data;
            // if(dataFromBackstage.code === 200) {
            // localStorage.setItem('token',res.token)
            // }
            // this.props.history.push('/login')
        // })
    }
    // 获得input输入框中的值
    getValue(e, name) {
        // console.log(e.target.value)
        let data = {}
        data[name] = e.target.value
        // console.log(data)
        this.setState(data)
    }
    // 检验确认密码是否与第一次输入的密码一致
    verifyPassword() {
        var reg = /^1[0-9]{10}$/;
        // 检察电话号码格式是否正确
        if(reg.test(this.state.phonenum)) {
            // 检察两次输入的密码是否相等
            if (this.state.password === this.state.passwordSec) {
                let dataPassToBackstage = {
                    phonenum: '',
                    username: '',
                    password: ''
                }
                dataPassToBackstage.phonenum = this.state.phonenum;
                dataPassToBackstage.username = this.state.username;
                dataPassToBackstage.password = this.state.password;
                console.log(dataPassToBackstage);
                // 发送请求并检查返回的数据
                register(dataPassToBackstage).then(res => {
                // let dataFromBackstage = res.data;
                // if(dataFromBackstage.code === 200) {
                // localStorage.setItem('token',res.token)
                // }
                // 若返回数据正确则跳转到登录页面
                this.props.history.push('/login')
            })
            console.log('success')
            } else {
                console.log('failed')
            }
        }else {
            console.log('格式错误')
        }     
    }
    render() {
        return (
            <div className="signIn">
                <form action="#" method="post" name="registered" >
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
