import React from 'react'
import './myOrder.css'

export default React.createClass({
  render() {
    return <div id="myOrder">
<div className="tab-box">
	 <div className="pure-g">
	    <div className="pure-u-1-5">
			<div className="order-tab">全部</div>
	    </div>
	     <div className="pure-u-1-5">
    		<div className="order-tab  active-tab">待审核</div>
	    </div>
	     <div className="pure-u-1-5">
	    	<div className="order-tab">待付款</div>
	    </div>
	      <div className="pure-u-1-5">
	    	<div className="order-tab">待发货</div>
	    </div>
	  	<div className="pure-u-1-5">
	    	<div className="order-tab">交易成功</div>
	    </div>
	</div>
</div>
<div className="split-line"></div>

<div className="order-detail">
	<div className="shop-status">
		<div className="float-left">
			<img src="/images/shop_icon.png" className="shop-icon"/>&nbsp;浦东张江路店
			<img src="/images/arrow.png" className="arrow"/>
		</div>
		<div className="float-right key-sign">待提交审核</div>
	</div>

	<div className="order-product">
		<div className="product-ban">
			<div className="product-box">
				<img src="/images/iphone.png" className="product-img"/>
				<p>¥:2500*1</p>
			</div>
		</div>
	</div>

	<div className="price-period">
		 <div className="pure-g">
		    <div className="pure-u-1-3">共2件</div>
		     <div className="pure-u-1-3 text-right">实付金额</div>
		     <div className="pure-u-1-3 text-right">¥：4000.00</div>
		</div>
		<div className="split-line"></div>
		 <div className="pure-g grey-word">
		     <div className="pure-u-2-3 text-right">首付金额</div>
		     <div className="pure-u-1-3 text-right">¥：2000.00</div>
		</div>
		 <div className="pure-g grey-word">
		     <div className="pure-u-2-3 text-right">服务费</div>
		     <div className="pure-u-1-3 text-right">¥：1000.00</div>
		</div>
		<div className="split-line"></div>
		 <div className="info-row">
	     	<button type="button" className="opt-btn">取消订单</button>
	     	<button type="button" className="opt-btn">编辑订单</button>
	     	<button type="button" className="opt-btn">提交审核</button>
     	</div>

	</div>

</div>

<div className="order-detail">
	<div className="shop-status">
		<div className="float-left">
			<img src="/images/shop_icon.png" className="shop-icon"/>&nbsp;浦东张江路店
			<img src="/images/arrow.png" className="arrow"/>
		</div>
		<div className="float-right key-sign">待付款</div>
	</div>

	<div className="order-product">
		<div className="product-ban">
			<div className="product-box">
				<img src="/images/leshi.png" className="product-img"/>
				<p>¥:2500*1</p>
			</div>
		</div>
	</div>

	<div className="price-period">
		 <div className="pure-g">
		    <div className="pure-u-1-3">共2件</div>
		     <div className="pure-u-1-3 text-right">实付金额</div>
		     <div className="pure-u-1-3 text-right">¥：4000.00</div>
		</div>
		<div className="split-line"></div>
		 <div className="pure-g grey-word">
		     <div className="pure-u-2-3 text-right">首付金额</div>
		     <div className="pure-u-1-3 text-right">¥：2000.00</div>
		</div>
		 <div className="pure-g grey-word">
		     <div className="pure-u-2-3 text-right">服务费</div>
		     <div className="pure-u-1-3 text-right">¥：1000.00</div>
		</div>
		<div className="split-line"></div>
		 <div className="info-row">
	     	<button type="button" className="opt-btn">取消订单</button>
	     	<button type="button" className="opt-btn">去付款</button>
     	</div>

	</div>
</div>

<div className="bg-layer"></div>

    </div>
  }
});
