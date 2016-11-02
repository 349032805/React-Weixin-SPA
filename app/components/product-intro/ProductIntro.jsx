import React from 'react'
import FooterBtn from '../footer-btn/FooterBtn.jsx'
import './productIntro.css'

export default React.createClass({
  render() {
    return <div id="productIntro">
		<div className="tab-box">
			 <div className="pure-g">
			    <div className="pure-u-1-3">
					<div className="order-tab active-tab">商品介绍</div>
			    </div>
			     <div className="pure-u-1-3">
		    		<a href="/params" className="order-tab">参数规格</a>
			    </div>
			     <div className="pure-u-1-3">
			    	<a href="/supplier" className="order-tab">商家介绍</a>
			    </div>
			</div>
		</div>
		<div className="split-line"></div>
		
		<div>
			<img src="/images/long_intro1.jpg" width="100%" height="auto" />
		</div>

	
	{/*这里的　text 可以是写死的值，也可以是state里面，也可以是直接定义的变量*/}

		<FooterBtn text="立即下单"/>

    </div>
  }
});
