import React from 'react'
import FooterBtn from '../footer-btn/FooterBtn.jsx'
import './productIntro.css'

export default React.createClass({
  render() {
    return <div id="productIntro">
		<div className="tab-box">
			 <div className="pure-g">
			    <div className="pure-u-1-3">
					<a href="/productIntro" className="order-tab">商品介绍</a>
			    </div>
			     <div className="pure-u-1-3">
		    		<a href="/params" className="order-tab">参数规格</a>
			    </div>
			     <div className="pure-u-1-3">
			    	<div className="order-tab active-tab">商家介绍</div>
			    </div>
			</div>
		</div>
		<div className="split-line"></div>
		
		<div className="supplier-intro">
			<div className="head-name">
				<img src="/images/supplier_head.png"/>
				<div className="name-sold">
					<div>
						<i className="shop-icon"></i>&nbsp;苹果官网旗舰店(人民广场店)
					</div>
					<p className="has-sold">已售100件</p>
				</div>
			</div>

			<div className="shop-index">
				<i className="location-icon"></i>&nbsp;&nbsp;上海市黄浦区淮海中路282号香港广场北座
			</div>

			<div className="shop-index">
				<i className="telephone-icon"></i>&nbsp;&nbsp;400-888-6666
			</div>

			<div className="shop-index">
				<i className="clock-icon"></i>&nbsp;&nbsp;周一至周五 8：00-22：00
			</div>

		</div>

		<FooterBtn text="立即下单"/>

    </div>
  }
});
