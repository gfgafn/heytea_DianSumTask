import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import ReplaceTabbar from '../../components/ReplaceTabbar'
import CommodityDetail from './CommodityDetail'
import './index.css'
export default class Index extends Component {
    render() {
        return (
            <div>
                {/* ---------------搜索框------------------- */}
                <div className="searchBox">
                    <ul>
                        <li><p>拼单</p></li>
                        <li><div><p>搜索商品</p></div></li>
                    </ul>
                </div>
                {/* ---------------门店选择----------------- */}
                <div className="stores">
                    <ul>
                        <li>
                        <NavLink to="#">
                            <p>无门店信息</p>
                            <p>未获取您的定位，去授权</p>
                        </NavLink>
                        </li>
                        <li>
                        <div>
                            <p className="current_PickupMethod">自取</p>
                            <p>外卖</p>
                        </div>
                        </li>
                    </ul>
                </div>
                {/* ---------------滚动消息----------------- */}
                <div className="scrollMessage">
                    <ul>
                        <li><p>地中海桃桃金凤果汁茶饮料，及[伊比利西柚绿妍]</p></li>
                        <li><p>更多</p></li>
                    </ul>
                </div>
                {/* ---------------左侧厨窗栏---------------- */}
                <div className="showcase">
                    <ul>
                        <li><a href="#mrxs"><p>每日鲜食</p></a></li>
                        {/* <li><NavLink to="#mrxs" activeClassName="curentShowcase"><p>每日鲜食</p></NavLink></li> */}
                        <li><a href="#rqbh"><p>人气必喝榜</p></a></li>
                        {/* <NavLink to="#rqbh" activeClassName="curentShowcase"><li ><p>人气必喝榜</p></li></NavLink> */}

                        <li><a href="#djxd"><p>当季限定</p></a></li>
                        <li><a href="#xczb"><p>喜茶制冰</p></a></li>
                        <li><a href="#gcjz"><p>果茶家族</p></a></li>
                        <li><a href="#mc/nrc"><p>茗茶/牛乳茶</p></a></li>
                        <li><a href="#bbjz"><p>波波家族</p></a></li>
                        <li><a href="#rytj"><p>热饮推荐</p></a></li>
                        <li><a href="#cc"><p>纯茶</p></a></li>
                        <li><a href="#jl"><p>加料</p></a></li>
                        <li><a href="#gtky"><p>共同抗疫</p></a></li>
                        <ReplaceTabbar />
                    </ul>
                </div>
                {/* ---------------右侧轮播图---------------- */}
                <div className="slideshowIndex">
                    <Slideshow />
                    {/* <Slideshow /> */}
                </div>
                {/* ---------------右侧商品栏---------------- */}
                <div className="commodity">
                    <p id="mrxs">每日鲜食</p>
                    <CommodityDetail />
                    <CommodityDetail />
                    <p id="rqbh">人气必喝榜</p>
                    <CommodityDetail />
                    <p id="djxd">当季限定</p>
                    <CommodityDetail />
                    <CommodityDetail />
                    <CommodityDetail />
                    <p id="xczb">喜茶制冰</p>
                    <CommodityDetail />
                    <CommodityDetail />
                    <p id="gcjz">果茶家族</p>
                    <CommodityDetail />
                    <CommodityDetail />
                    <CommodityDetail />
                    <p id="mc/nrc">茗茶/牛乳茶</p>
                    <CommodityDetail />
                    <p id="bbjz">波波家族</p>
                    <CommodityDetail />
                    <p id="rytj">热饮推荐</p>
                    <CommodityDetail />
                    <p id="cc">纯茶</p>
                    <CommodityDetail />
                    <CommodityDetail />
                    <p id="jl">加料</p>
                    <CommodityDetail />
                    <CommodityDetail />
                    <p id="gtky">共同抗疫</p>
                    <CommodityDetail />
                    <ReplaceTabbar />
                </div>              
            </div>
        )
    }
}
