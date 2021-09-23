import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ReplaceTabbar from '../../components/ReplaceTabbar'
import './index.css'
export default class Mine extends Component {
    componentDidMount(){
        this.props.showUserInfo()
    }
    render() {
        const {username} = this.props.userInfo
        return (
            <div>
                {/* 头图 */}
                <div className="focus" >
                    <img src="../img/my/me-focus.png" alt="" />
                </div>
                {/* <!----------------- 账号相关 --------------------------> */}
                <div className="account" >
                    <ul>
                        <li>
                            <p>{username}</p>
                            <p>Go会员</p>
                            <NavLink to="/login"><p>点击登录</p></NavLink>
                        </li>
                        <li ><img src="../img/my/me_icon_head.png" alt="" /></li>
                    </ul>
                    <ul>
                        <li>
                            <img src="../img/my/me_icon_points.png" alt="" />
                            <p>234</p>
                            <p>积分商城</p>
                        </li>
                        <li>
                            <img src="../img/my/me_icon_quan.png" alt="" />
                            <p>0</p>
                            <p>喜茶券</p>
                        </li>
                        <li>
                            <img src="../img/my/me_icon_wallet.png" alt="" />
                            <p>0</p>
                            <p>钱包</p>
                        </li>
                        <li>
                            <img src="../img/my/me_icon_gift_card.png" alt="" />
                            <p>0</p>
                            <p>阿喜有礼</p>
                        </li>
                    </ul>
                </div>
                {/* <!-------------------- 任务中心 -------------------------> */}
                <div className="mission" >
                    <ul>
                        <li>
                            <p>任务中心</p>
                            <p>MISSION CENTER</p>
                        </li>
                        <li>
                            <img src="../img/my/mission.png" alt="" />
                        </li>
                    </ul>
                </div>
                {/* <!-------------- 菜单 ---------------------------------> */}
                <div className="mymenu" >
                    <ul>
                        <li>
                            <NavLink to="/mine/membershipCode"><p name="MembershipCode">会员码</p></NavLink>
                        </li>
                        <li>
                            <p name="MembershipCode">门店积分扫码、喜茶钱包和阿喜有礼支付</p>
                        </li>
                        <li>
                            <img src="../img/my/icon_arrow.png" alt="" name="MembershipCode" />
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/mine/exchangeCenter"><p>兑换中心</p></NavLink>
                        </li>
                        <li>
                            <p>兑换星球会员、喜茶券和和阿喜有礼</p>
                        </li>
                        <li>
                            <img src="../img/my/icon_arrow.png" alt="" />
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/mine/themeAndCover"><p>主题封面</p></NavLink>
                        </li>
                        <li>
                            <p></p>
                        </li>
                        <li>
                            <img src="../img/my/icon_arrow.png" alt="" />
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/mine/invoiceAssistant"><p>发票助手</p></NavLink>
                        </li>
                        <li>
                            <p></p>
                        </li>
                        <li>
                            <img src="../img/my/icon_arrow.png" alt="" />
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/mine/customerService1"><p>联系客服</p></NavLink>
                        </li>
                        <li>
                            <p></p>
                        </li>
                        <li>
                            <img src="../img/my/icon_arrow.png" alt="" />
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/mine/customerService2"><p>联系客服</p></NavLink>
                        </li>
                        <li>
                            <p></p>
                        </li>
                        <li>
                            <img src="../img/my/icon_arrow.png" alt="" />
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/mine/messageCenter"><p>消息中心</p></NavLink>
                        </li>
                        <li>
                            <p></p>
                        </li>
                        <li>
                            <img src="../img/my/icon_arrow.png" alt="" />
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/mine/more"><p>更多</p></NavLink>
                        </li>
                        <li>
                            <p></p>
                        </li>
                        <li>
                            <img src="../img/my/icon_arrow.png" alt="" />
                        </li>
                    </ul>
                </div>
                <ReplaceTabbar />
            </div>
        )
    }
}
