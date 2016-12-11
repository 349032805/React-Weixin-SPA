import React from 'react'
import NavLink from '../lib/NavLink.jsx'
import './nav.css'

export default class Nav extends React.Component{

  render() {
    return ( 
        <div id="nav">
	       <div className="footer-menu">
		        <ul className="pure-g footer-container">
  		            <li className="pure-u-1-4">
                      <NavLink onlyActiveOnIndex to="/">
                          <i className="home-menu"><p>首页</p></i>
                     </NavLink>
                  </li>
               
  		            <li className="pure-u-1-4">
                    <NavLink to="/productIntro">
                        <i className="customer-order-menu"><p>产品</p></i>
                    </NavLink>
                  </li>
               
  		            <li className="pure-u-1-4">
                    <NavLink to="/MyOrder">
                        <i className="order-menu"><p>订单</p></i>
                    </NavLink>
                  </li>
                 
                
  		            <li className="pure-u-1-4">
                      <NavLink to="/my">
                        <i className="my-menu"><p>我的</p></i>
                      </NavLink>
                  </li>
                 
		        </ul>
		    </div>

          {this.props.children}
        </div>
    )
  }
}
