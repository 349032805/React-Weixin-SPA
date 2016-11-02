import React from 'react'
import './login.css'

export default React.createClass({
  render() {
    return <div id="login">
	<div className="login-box">
			<div className="login-num">
				<span className="login-phone float-left"></span>
				<p className="float-left login-color">手机号</p>
				<input type="text" className="float-right" placeholder="请输入您的手机号"/>
			</div>
			<div className="login-password split-line">
				<span className="login-lock float-left"></span>
				<p className="float-left login-color">密码</p>
				<input type="text" className="float-right" placeholder="请输入登录密码" />
			</div>
		</div>
		<div className="login-submit">
 			<button>登录</button>
 		</div>
 		<div className="login-link">
 			{/* <a href="javascript:;" className="float-left">忘记密码？</a> */}
 			<a href="javascript:;" className="float-right">立即注册</a>
 		</div>

    </div>
  }
});
