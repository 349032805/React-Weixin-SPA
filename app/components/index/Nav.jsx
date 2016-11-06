import React from 'react'
import NavLink from '../lib/NavLink.jsx'
import './nav.css'

export default class Nav extends React.Component{
	constructor() {
        super();
        this.state = {
         pathname:window.location.pathname
        };
    }

  render() {
    return ( 
        <div id="nav">
	       <div className="footer-menu">
		        <ul className="pure-g footer-container">
		            <li className={this.state.pathname=="/"?"pure-u-1-4 on":"pure-u-1-4"}>
                  <a href="/" className="home-menu"><p>首页</p></a>
                </li>
		            <li className={this.state.pathname==="/productIntro"?"pure-u-1-4 on":"pure-u-1-4"}><a href="/productIntro" className="customer-order-menu"><p>产品</p></a></li>
		            <li className={this.state.pathname==="/MyOrder"?"pure-u-1-4 on":"pure-u-1-4"}><a href="/MyOrder" className="order-menu"><p>订单</p></a></li>
		            <li className={this.state.pathname==="/my"?"pure-u-1-4 on":"pure-u-1-4"}><a href="/my" className="my-menu"><p>我的</p></a></li>
		        </ul>
		    </div>

          {this.props.children}
        </div>
    )
  }
}
