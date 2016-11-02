import React from 'react'
import FooterBtn from '../footer-btn/FooterBtn.jsx'
import './signContract1.css'

export default React.createClass({
  render() {
    return <div id="signContract1">
		<div className="process-box">
			<div className="process">
				<div className="process-circle red-circle">1</div>
				<div className="finish-line"></div>
				<div className="process-circle grey-circle">2</div>
				<div className="finish-line"></div>
				<div className="process-circle grey-circle">3</div>
				<p className="process-tip" style={{left:'-6px',color:'#fe295a'}}>填写资料</p>
				<p className="process-tip" style={{left:'124px'}}>客户签约</p>
				<p className="process-tip" style={{right:'0'}}>订单审核</p>
			</div>
			<p className="tip">为尽快通过审核，请检查您的信息，确保整洁、准确!</p>
		</div>

		<div>
			<div className="pure-g">
			    <div className="pure-u-1-2">实名认证</div>
			     <div className="pure-u-1-2">
			     </div>
			</div>

			<div className="pure-g">
			    <div className="pure-u-1-2">银行卡</div>
			     <div className="pure-u-1-2">
			     </div>
			</div>
		</div>

		<div className="auth-index">
			<div className="pure-g">
			    <div className="pure-u-1-2">完善个人资料</div>
			     <div className="pure-u-1-2">
			     	<div className="float-right">
			     		<span className="noset-tip">未设置</span>
			     		<img src="/images/arrow.png" className="arrow"/>
			     	</div>
			     </div>
			</div>

			<div className="pure-g">
			    <div className="pure-u-1-2">紧急联系人</div>
			     <div className="pure-u-1-2">
			     	<div className="float-right">
			     		<span className="noset-tip">未设置</span>
			     		<img src="/images/arrow.png" className="arrow"/>
			     	</div>
			     </div>
			</div>

			<div className="pure-g">
			    <div className="pure-u-1-2">证件上传</div>
			     <div className="pure-u-1-2">
			     	<div className="float-right">
			     		<span className="noset-tip">未设置</span>
			     		<img src="/images/arrow.png" className="arrow"/>
			     	</div>
			     </div>
			</div>

		</div>

		<div className="agreement">
			<img src="/images/tick_checkbox.png" className="tick-checkbox"/> 
			&nbsp;我已经阅读并接受<a href="/grantBook" style={{color:'#fe295a'}}>《委托扣款授权书》</a>和<a href="/periodPayBook" style={{color:'#fe295a'}}>《分期消费协议》</a>
		</div>
		<FooterBtn text="下一步"/>

    </div>
  }
});
