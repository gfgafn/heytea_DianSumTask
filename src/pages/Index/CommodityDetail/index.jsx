import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import orderItem1_cr from '../../../images/order/orderItem1_cr.jpg'
import './index.css'
export default class CommodityDetail extends Component {
    render() {
        return (
            <div className="commodityDetail">
                <ul>
                    <li>
                        <img src={ orderItem1_cr } alt="" />
                    </li>
                </ul>
                <ul>
                    <li>多肉黄皮仙露</li>
                    <li>
                        <div>新品</div>
                        <div>含茶</div>
                    </li>
                    <li>手剥黄皮鲜果，去皮去核去果芯</li>
                    <li>
                        <div>￥29</div>
                        <NavLink to="/index/shoppingCart">
                            <div>选规格</div>
                        </NavLink>
                        
                    </li>
                </ul>
            </div>
        )
    }
}
