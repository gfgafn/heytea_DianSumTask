import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import CurrentOrder from './CurrentOrder'
import HistoricalOrder from './HistoricalOrder'
import './index.css'
export default class Order extends Component {
    render() {
        return (
            <div>
                {/* <div className=""> 
                    <div>
                        <NavLink to="#">
                            <span>想对你说</span>
                        </NavLink>
                    </div>
                </div> */}
                <div className="orderType">
                    <ul>
                        <li>
                            <NavLink to="/order/currentOrder" activeClassName="orderType_active">
                                <span>当前订单</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/order/historicalOrder" activeClassName="orderType_active">
                                <span>历史订单</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/order/currentOrdere" component={CurrentOrder} />
                    <Route path="/order/historicalOrder" component={HistoricalOrder} />
                </Switch>
            </div>
        )
    }
}