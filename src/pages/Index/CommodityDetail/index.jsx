import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import orderItem1_cr from '../../../images/order/orderItem1_cr.jpg'
import { getAllTea, getTeaInfo_tags, getTeainfoBbyTag } from '../../../http/api'
import './index.css'
export default class CommodityDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
                        break;
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
        <div className="commodityDetail">
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
    )
}
}
