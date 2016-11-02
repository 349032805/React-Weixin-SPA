import React from 'react'
import './template.css'

export default React.createClass({
  render() {
    return <div className="route-box">
	<p>
		<a href="/" target="_blank">首页</a>
	</p>

	<p>
		<a href="/productItem" target="_blank">商品列表</a>
	</p>

	<p>
		<a href="/productDetail" target="_blank">商品详情页－属性选择</a>
	</p>

	<p>
		<a href="/productIntro" target="_blank">商品详情页－商品介绍</a>
	</p>

	<p>
		<a href="/params" target="_blank">商品详情页－参数规格</a>
	</p>

	<p>
		<a href="/supplier" target="_blank">商品详情页－商户介绍</a>
	</p>

	<p>
		<a href="/orderConfirm" target="_blank">订单确认</a>
	</p>

	<p>
		<a href="/signContract1" target="_blank">签约</a>
	</p>


	<p style={{marginTop:'60px'}}>
		<a href="/my" target="_blank">我的</a>
	</p>


	<p style={{marginTop:'60px'}}>
		<span>4 个人账户管理</span>
	</p>

	<p>
		<a href="/login" target="_blank">登录</a>
	</p>

	<p>
		<a href="/register" target="_blank">4.2.1 注册_1</a>
	</p>

	<p>
		<a href="/setPassword" target="_blank">4.2.2 注册_2</a>
	</p>

	<p>
		<a href="/grantBook" target="_blank">4.3.3 注册_3</a>
	</p>

	<p style={{marginTop:'30px'}}>
		<span className="warning">*模态框提示</span>
	</p>

	<p>
		<a href="/noAuthModal" target="_blank">实名认证</a>
	</p>

	<p>
		<a href="/payFailModal" target="_blank">支付失败</a>
	</p>

	<p>
		<a href="/tipBubble" target="_blank">气泡提示框</a>
	</p>

	<p style={{marginTop:'30px'}}>
		<a href="/test" target="_blank">七牛测试页</a>
	</p>


    </div>
  }
});
