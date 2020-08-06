import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import "./index.css"



import Home from "../home/Home"
import Mine from "../mine/Mine"
import ShopCar from "../shopcar/ShopCar"
import Classification from "../classification/Classification"

export default class Index extends Component {
    render() {
        return (
            <div className="index">
               <Switch>
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/shopcar" component={ShopCar}></Route>
                    <Route path="/index/Mine" component={Mine}></Route>
                    <Route path="/index/classification" component={Classification}></Route>
                    <Redirect to="/index/home"></Redirect>
                </Switch>

                
                <footer>
                    <NavLink to="/index/home" activeClassName="select">
                      首页
                    </NavLink>
                    <NavLink to="/index/classification" activeClassName="select">分类</NavLink>
                    <NavLink to="/index/shopcar" activeClassName="select">购物车</NavLink>
                    <NavLink to="/index/Mine" activeClassName="select">个人中心</NavLink>
                </footer>

            </div>
        )
    }
}
