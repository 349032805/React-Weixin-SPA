import React from 'react'
import FooterBtn from '../footer-btn/FooterBtn.jsx'
import './orderConfirm.css'

export default React.createClass({
  render() {
    return <div id="orderConfirm">
		<div className="credit-amount">
			<p className="leave-amount">剩余信用额度</p>
			<div className="credit-detail">
				<p className="credit-num">¥ 1,000.00</p>
				<p className="credit-tip">总信用额度 ¥ 10000.00</p>
				<img src="/images/remind_icon.png" className="remind-icon"/>
			</div>
		</div>

		<div className="pay-period">
			<div className="shop-name">
				<img src="/images/shop_icon.png" className="shop-icon"/>
				&nbsp;苹果官网旗舰店（人民广场店）
			</div>

			<div className="pay-index">
				<div className="pic-box">
					<img src="/images/iphone.png" className="buy-product" />
					<p className="product-price">¥ 5999.00 x 1</p>
				</div>
				<div className="index-item">
					<div className="pure-g border-bottom-line">
					    <div className="pure-u-1-2">首付比例</div>
					     <div className="pure-u-1-2 text-right value">
					     	10% <img src="/images/arrow_grey.png" className="arrow-icon"/>
					    </div>
					</div>

					<div className="pure-g border-bottom-line">
					    <div className="pure-u-1-2">首付金额</div>
					     <div className="pure-u-1-2 text-right value">¥ 999.00 </div>
					</div>

					<div className="pure-g border-bottom-line">
					    <div className="pure-u-1-2">分期月数</div>
					     <div className="pure-u-1-2 text-right value">
					     	12期 <img src="/images/arrow_grey.png" className="arrow-icon"/>
					    </div>
					</div>

					<div className="pure-g">
					    <div className="pure-u-1-2">月还款金额</div>
					     <div className="pure-u-1-2 text-right value">¥ 425.00</div>
					</div>

					<div className="pure-g">
					    <div className="pure-u-1-2">分期支付金额</div>
					     <div className="pure-u-1-2 text-right value">¥ 425.00</div>
					</div>

					<div className="pure-g">
					    <div className="pure-u-1-2">保证金额</div>
					     <div className="pure-u-1-2 text-right value">¥ 425.00</div>
					</div>

				</div>
			</div>
		</div>

		<div className="delivery-mode">
			<div className="pure-g border-bottom-line">
			    <div className="pure-u-1-2">配送方式</div>
			     <div className="pure-u-1-2 text-right value">
			     	物流配送 <img src="images/arrow_grey.png" className="arrow-icon"/>
			    </div>
			</div>

			<div className="name-address">
				<div><span>张三</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>18702121893</span>
					<div className="default-name">默认</div>
				</div>

				<div className="address">
					 <img src="/images/location_icon.png" className="location-icon"/>
					 &nbsp;上海市浦东新区张衡路889号
				</div>
				<img src="/images/arrow_grey.png" className="arrow-icon2"/>
				<div className="split-color-line">
					<img src="/images/color_line.png" className="color-line"/>
				</div>
			</div>
		</div>

		<div className="total-count">
			<div className="pure-g">
			    <div className="pure-u-1-2">推荐人/客户经理</div>
			     <div className="pure-u-1-2 text-right value">
			     	张三 &nbsp;&nbsp; 0101011 <img src="/images/arrow_grey.png" className="arrow-icon"/>
			     </div>
			</div>

			<div className="pure-g">
			    <div className="pure-u-1-3">订单合计</div>
			    <div className="pure-u-1-3 text-center font-13">实付金额</div>
			    <div className="pure-u-1-3 text-right value">¥ 1850.00</div>
			</div>

			<div className="pure-g">
			 	<div className="pure-u-1-3"></div>
			    <div className="pure-u-1-3 text-center font-13">首付金额</div>
			    <div className="pure-u-1-3 text-right value">¥ 1850.00</div>
			</div>

			<div className="pure-g">
				<div className="pure-u-1-3"></div>
			    <div className="pure-u-1-3 text-center font-13">服务费</div>
			    <div className="pure-u-1-3 text-right value">¥ 1850.00</div>
			</div>

		</div>


		<FooterBtn text="下一步"/>

    </div>
  }
});
