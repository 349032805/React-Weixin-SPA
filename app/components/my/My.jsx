import React from 'react'
import './my.css'

export default React.createClass({
  render() {
    return <div id="my">
	<div className="theme-ban">
		<div className="account-box">
			<img src="/images/check_person_logo.png" className="user-logo"/>
			<div className="name-phone">
				<p>小二郎&nbsp;<img src="/images/hasauth.png" className="hasauth"/></p>
				<p>1870121893</p>
			</div>
			<div className="bell-qrcode float-right">
				<a href="#" className="link-icon">
					<img src="/images/qrcode_icon.png"/>
				</a>
				<a href="#" className="arrow-white"></a>
			</div>
		</div>
	</div>

	<div className="my-orders">
		<div className="theme">
	 		<div className="theme-title">我的订单</div>
	 		<a className="theme-more" href="#">全部订单 &nbsp;<span className="arrow"></span> </a>
	 	</div>

	 	 <div className="pure-g text-center order-tab">
		    <div className="pure-u-1-4">
				<a href="#" className="wait-check-icon">
				<div className="tip-circle">1</div>
				<p>待审核</p>
				</a>
		    </div>
		     <div className="pure-u-1-4">
		     	<a href="#" className="wait-pay-icon">
		     	<div className="tip-rect">10</div>
		     	<p>待付款</p>
		     	</a>
		    </div>
		     <div className="pure-u-1-4">
		     	<a href="#" className="wait-delivery-icon"><p>待发货</p></a>
		    </div>
		      <div className="pure-u-1-4">
	      		<a href="#" className="wait-besure-icon"><p>待确认</p></a>
		    </div>
		</div>
	</div>

<div className="my-orders">
	<div className="theme">
 		<div className="theme-title">审核管理</div>
 		<a className="theme-more" href="#"><span className="arrow"></span> </a>
 	</div>

 	 <div className="pure-g text-center check-label">
	    <a className="pure-u-1-2" style={{position:'relative'}} href="#">
			<img src="/images/credit_check.png" className="check-icon"/>
			&nbsp;信用审核

	    	<div className="vertical-line"></div>
	    </a>

	     <a className="pure-u-1-2" href="#">
			<img src="/images/order_check.png" className="check-icon"/>
			&nbsp;订单审核
	    </a>
	   
	</div>
</div>


	<div id="accountRelative">
		<a className="relative-ban" href="#">
			<i className="ban-icon chart-icon"></i>&nbsp;信用提升
			<span className="arrow" style={{top:'20px'}}></span>
		</a>

		<a className="relative-ban" href="#">
			<i className="ban-icon safe-icon"></i>&nbsp;安全中心
			<span className="arrow" style={{top:'20px'}}></span>
		</a>

		<a className="relative-ban" href="#">
			<i className="ban-icon bulb-icon"></i>&nbsp;帮助中心
			<span className="arrow" style={{top:'20px'}}></span>
		</a>
	</div>


</div>
  }
});
