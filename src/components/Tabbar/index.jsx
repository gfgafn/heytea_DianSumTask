import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import NavLink from '../../components/NavLink'
import './index.css';
export default class Tabbar extends Component {
    render() {
        return (
            <div className={'tabbar'}>
                <ul>
                    <li>
                        <NavLink to="/home">
                            <img src="../img/tabbar/home.png" alt="" name="home"/>
                            <p name="home">首页</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/index">
                            <img src="../img/tabbar/index.png" alt="" name="index"/>
                            <p name="index">点单</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/mart">
                            <img src="../img/tabbar/mart.png" alt="" name="mart"/>
                            <p name="mart">百货</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">
                            <img src="../img/tabbar/order.png" alt="" name="order"/>
                            <p name="order">订单</p>
                        </NavLink>
                    </li>     
                    <li>
                        <NavLink to="/mine" activeClassName={'tabbarCurrent'} >
                            <img src="../img/tabbar/my.png" alt="" name="my"/>
                            <p name="my">我的</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
