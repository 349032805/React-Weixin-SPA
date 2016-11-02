import React from 'react'
import NavLink from '../lib/NavLink.jsx'
import './nav.css'

export default React.createClass({
  render() {
    return (
        <div id="nav">
	       <div className="footer-menu">
		        <ul className="pure-g footer-container">
		            <li className="pure-u-1-4 on"><a href="/" className="home-menu"><p>首页</p></a></li>
		            <li className="pure-u-1-4"><a href="/customerOrder" className="customer-order-menu"><p>客单</p></a></li>
		            <li className="pure-u-1-4"><a href="/order" className="order-menu"><p>订单</p></a></li>
		            <li className="pure-u-1-4"><a href="/my" className="my-menu"><p>我的</p></a></li>
		        </ul>
		    </div>

          {this.props.children}
        </div>
    )
  }
})
