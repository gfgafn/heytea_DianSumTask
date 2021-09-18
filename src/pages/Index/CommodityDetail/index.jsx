import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Slideshow from '../../../components/Slideshow'
import orderItem1_cr from '../../../images/order/orderItem1_cr.jpg'
import round_close_btn from '../../../images/index/round_close_btn.png'
import menupopup_btn_share_normal from '../../../images/index/menupopup_btn_share_normal.png'
import num_decrease from '../../../images/index/num_decrease.png'
import num_increase from '../../../images/index/num_increase.png'
import { getAllTea, getTeaInfo_tags, getTeainfoBbyTag } from '../../../http/api'
import './index.css'

export default class CommodityDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            purchaseQuantity:'1',
            tag:'当季限定'
            // "categories": [{
            //     "name":"当季限定",
            //     "products": [
            //         {
            //             // "id":1674,
            //             // "name":"",
            //             // "description":"",
            //             // "intro":""
            //         }
            //     ]
            // },{}]

            // name: '',
            // intro: '',
            // labels: [],
            // description: '',
            // price: '',
            // images: [],
        }
    }
    
    configPurchase() {
        const configPurchase = document.getElementById('configPurchase');
        configPurchase.classList.toggle('active');
    }
    
  
    getTeaInfo() {
        getTeainfoBbyTag(this.state).then(res => {
            // getTeaInfo_tags().then(res => {
            console.log(res)
            console.log(res.data)
            // let allTeaInfo = res.data.map((tea)=>{
            //     // console.log(tea)
            //     // console.log(tea.id)
            //     return ({
            //         categories: [{
            //             name: tea.tag,
            //             products: [
            //                 {
            //                     "id": tea.id,
            //                     "name": tea.name,
            //                     "description": tea.description,
            //                     "price": tea.price
            //                 }
            //             ]
            //         }]
            //     })
            // })
            // console.log(allTeaInfo)
            // this.setState(allTeaInfo)
            // console.log(this.state)
            let product = res.data.map((tea) => {
                return ({
                    "id": tea.id,
                    "name": tea.name,
                    "description": tea.description,
                    "price": tea.price
                })
            })
            console.log(product)
            let tea_tag = res.data.map((tea)=> {
                switch (tea.name) {
                    case '当季限定':
                        return ({
                            name: tea.name,
                            products: product
                        })
                
                    default:
                        return({})
                    
                }                
            })
        console.log(tea_tag)
        // let allTeaInfo = {
        //     categories: [{
        //         name: res.data[0],
        //         products: [
        //             {
        //                 "id": res.data[0].id,
        //                 "name": res.data[0].name,
        //                 "description": res.data[0].description,
        //                 "price": res.data[0].price
        //             }
        //         ]
        //     }]
        // }
        // console.log(this.state)
        // console.log(allTeaInfo)
        // this.setState(allTeaInfo)
        // console.log(this.state)
        })
    }
    
   
    render() {
        return (
            <div>
                <div className="commodityDetail"  
                onClick={() => { this.configPurchase() }}
                >
                    <ul>
                        <li>
                            <img src={orderItem1_cr} alt="" />
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
                                <div onClick={() => { this.getTeaInfo() }}>选规格</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <ConfigPurchase />
            </div>
        )
    }
}

class ConfigPurchase extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 1,
        }
    }
    configPurchase() {
        const configPurchase = document.getElementById('configPurchase');
        configPurchase.classList.toggle('active')
    }
    // configSelectHighlight() {
    //     const configSpan = document.querySelectorAll('span');
    //     for (let i=0; i<configSpan.length; i++ ){
    //         configSpan.item(i).onclick = function() {
    //             console.log(configSpan.item(i));
    //             if(configSpan.item(i).className === 'active'){
    //                 configSpan.item(i).className = ''
    //             } else {
    //                 configSpan.item(i).className = 'active'
    //             }
    //         }    
    //     }
    // }
    componentDidMount() {
        const configSpan = document.querySelectorAll('span');
        for (let i=0; i<configSpan.length; i++ ){
            configSpan.item(i).onclick = function() {
                console.log(configSpan.item(i));
                if(configSpan.item(i).className === 'active'){
                    configSpan.item(i).className = ''
                } else {
                    configSpan.item(i).className = 'active'
                }
            }    
        }
    }
    numChange(flag) {
        if (flag === "inc") {
            this.setState((state, props) => ({
                num: state.num + 1
            }));
        } else {
            if (this.state.num > 1){
                this.setState((state, props) => ({
                    num: state.num - 1
                }));
            } else {
                this.setState((state, props) => ({
                    num: state.num
                }));
            }
        }
    }
 
    render () {
        
        
        return (
            // {/* 商品具体配置选购弹出窗口页面,包括黑色半透明边框和中心白色卡片 */}
            <div id="configPurchase" className="configurationPurchase">
                {/* 商品具体配置选购弹出窗口卡片 */}
                <div id="configPurchaseCard" className="configPurchaseCard">
                    {/* 商品详细描述及具体配置选择区域 */}
                    <div >
                        <ul>
                            <li>
                                <img src={menupopup_btn_share_normal} alt=""></img>
                                <img src={round_close_btn} alt="" onClick={() => { this.configPurchase() }}></img>
                            </li>
                            {/* <li><Slideshow /></li> */}
                            <li><img src="https://go.cdn.heytea.com/storage/product/2021/07/19/923762b7c4b8462ab25bf37c177f0860.jpg-app" alt=""></img></li>
                            <li><p>多肉黄皮仙露</p></li>
                            <li>
                                <p>*冷500ml 初服清奇，细品甘爽。严选当季新鲜黄皮逐颗手剥，去皮去核去果芯。历经9道工序，鲜果鲜榨，果肉饱满吸得到。大师监制琥珀兰茶底与黄皮特有的辛香奇妙碰撞，豪饮慢咽，感受黄皮的清奇风味热烈释放，悠然尾韵久久回荡。</p>
                                <p>*味道清奇，超乎想象，不喜慎点。</p>
                                <p>*儿童、脾胃虚寒或有肠胃炎者不宜饮用；过量会伤胃或造成腹泻，请酌情饮用。</p>
                                <p>*黄皮果肉略带酸涩，不建议选择少甜，默认糖度风味更佳。</p>
                            </li>
                        </ul>
                        <ul>
                            <li>绿色喜茶</li>
                            <li>
                                <span>PLA可降解吸管</span>
                                <span>不使用吸管</span>
                            </li>
                        </ul>
                        <ul>
                            <li>状态</li>
                            <li>
                                <span>冰沙</span>
                                <span>非冰沙</span>
                                <span>温</span>
                                <span>一点温</span>
                                <span>比较烫</span>
                                <span>很烫-勿选PLA吸管</span>
                            </li>
                        </ul>
                        <ul>
                            <li>冰量</li>
                            <li>
                                <span>正常</span>
                                <span>少冰</span>
                                <span>少少冰</span>
                                <span>去冰</span>
                            </li>
                        </ul>
                        <ul>
                            <li>甜度</li>
                            <li>
                                <span>标准甜</span>
                                <span>少甜</span>
                                <span>少少甜</span>
                                <span>少少少甜</span>
                                <span>不另外加糖</span>
                            </li>
                        </ul>
                        <ul>
                            <li>茶底</li>
                            <li>
                                <span>绿妍</span>
                                <span>去茶底</span>
                            </li>
                        </ul>
                        <ul>
                            <li>加料</li>
                            <li>
                                <span>爆多双倍果肉</span>
                                <span>胶原弹力波波脆</span>
                                <span>桂花冻</span>
                                <span>益生菌</span>
                            </li>
                        </ul>
                        <ul>
                            <li>口味</li>
                            <li>
                                <span>芝士</span>
                                <span>顶部换葡萄雪芭-易融</span>
                                <span>顶部换椰椰雪糕-易融</span>
                                <span>多芝士</span>
                                <span>少芝士</span>
                                <span>取芝士</span>
                            </li>
                        </ul>
                        <ul>
                            <li>顶料分装</li>
                            <li>
                                <span>不分装</span>
                                <span>冰不分装热分装</span>
                                <span>分装(不满杯)</span>
                            </li>
                        </ul>  
                        
                    </div>

                    {/* 固定在卡片底部的价格展示、加入购物袋以及数量增减区域 */}
                    <div>
                        <ul>
                            <li>￥29</li>
                            <li>PLA可降解吸管，冰沙(推荐)，正常(推荐)，标准甜(推荐),绿烟(推荐),芝士(推荐)</li>
                        </ul>
                        <ul>
                            <li>
                                <img src={num_decrease} alt="" onClick={() => { this.numChange('dec') }}></img>
                                <p id="purchaseNum">{this.state.num}</p>
                                <img src={num_increase} alt="" onClick={() => { this.numChange('inc') }}></img>
                            </li>
                        </ul>
                        <ul><li onClick={() => { this.configPurchase() }}>加入购物袋</li></ul> 
                    </div>
                </div>
            </div>   
        )
        
    }
}