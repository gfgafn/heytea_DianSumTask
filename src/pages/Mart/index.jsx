import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ReplaceTabbar from '../../components/ReplaceTabbar'
import Slideshow from '../../components/Slideshow'
import mart_1 from '../../images/mart/mart_1.png'
import mart_2 from '../../images/mart/mart_2.png'
import mart_3 from '../../images/mart/mart_3.png'
import './index.css'
export default class Mart extends Component {
    render() {
        return (
            <div>
                <Slideshow />
                <div className="martNav">
                <div>
                    <ul>
                        <li>
                        <NavLink to="#">
                        <img src={ mart_1 } alt=""></img>
                        </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <NavLink to="#">
                        <img src={ mart_2 } alt=""></img>
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="#">
                        <img src={ mart_3 } alt=""></img>
                        </NavLink>
                        </li>
                    </ul>
                </div>
                    

                </div>
                <ReplaceTabbar/>
            </div>
        )
    }
}
