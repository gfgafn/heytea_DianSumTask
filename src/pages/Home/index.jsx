import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import ReplaceTabbar from '../../components/ReplaceTabbar'
import './index.css';
export default class Home extends Component {
    render() {
        return (
            <div>
                <Slideshow />
                {/* <!-- 按钮卡片1 --> */}
                <div className="card1">
                    <ul>
                        <li>
                            <NavLink to="/index">
                            <img src="../img/home/home_icon_ziqu1.png" alt=""/><br />
                            <b>门店自取</b>
                            <p>下单免排队</p>
                            </NavLink>
                        </li>
                        <li><img src="../img/home/home_icon_waimai1.png" alt=""/><br />
                            <b>外卖</b>
                            <p>无接触配送，送喜到家</p>
                        </li>          
                    </ul>
                    {/* <!-- 按钮卡片2 --> */}
                    <ol className="card2">
                        <li><img src="../img/home/home_icon_qiye1.png" alt=""/></li>
                        <li><p>好友拼单</p></li>
                        <li><p>拼单喝茶，新春有喜</p></li>
                    </ol>
                        
                </div>
                {/* <!-- 按钮卡片3 --> */}
                <nav>
                    <div className="c2bgp1">
                        <NavLink to="/mart">
                            <img src="../img/home/home_nav1.png" alt=""/>
                            <p>喜茶百货 </p>
                            <p>双口味新登场</p>
                        </NavLink>
                    </div>
                    <div className="c2bgp2">
                        <NavLink to="/">
                            <img src="../img/home/home_nav2.png" alt=""/>
                            <p>阿喜团餐</p>
                            <p>冬日热饮暖心欢聚</p> 
                        </NavLink>
                    </div>
                    <div className="c2bgp3">
                        <NavLink to="/">
                            <img src="../img/home/home_nav3.png" alt=""/>
                            <p>阿喜有礼</p>
                            <p>送礼找阿喜</p>
                        </NavLink>
                    </div>
                </nav>
                {/* ------------我的积分和会员码---------------- */}
                <div className="membershipCode_Home">
                    <ul>
                        <li>
                        <p>我的积分***</p>
                        <p>可兑换喜茶券和丰富灵感周边</p>
                        </li>
                        <li><img src="../img/home/home_icon_erweima.png" alt=""></img>
                        <p>会员码</p>
                        </li>
                    </ul>
                </div>
                <ReplaceTabbar/>
            </div>
        )
    }
}
