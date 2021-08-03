import React, { Component } from 'react'
import './index.css'
import icon_arrow from '../../../images/order/icon_arrow.png'
import orderItem1_cr from '../../../images/order/orderItem1_cr.jpg'
import orderItem2_cr from '../../../images/order/orderItem2_cr.jpg'
import { NavLink } from 'react-router-dom'
export default class OredrItem extends Component {
    render() {
        return (
            <div>
                <div className="oredrItem">
                    <ul>
                        <li>
                            <p>武汉K11 Select店</p>
                            <p>2021-07-05 19:43:23</p>
                        </li>
                        <li>
                            <span>已完成</span>
                            <img src={ icon_arrow } alt="" />
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src={ orderItem1_cr } alt="" />
                            <img src={ orderItem2_cr } alt="" />
                        </li>
                        <li>
                            <p>$104</p>
                            <p>共2件</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div>
                            <NavLink to="#">开发票</NavLink></div>
                            <div><NavLink to="#">再来一单</NavLink></div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
