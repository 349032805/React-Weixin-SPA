import React from 'react'
import './setPassword.css'

export default React.createClass({
  render() {
    return <div id="setPassword">
    	<div className="register-box">
			<div className="register-num">
				<p className="float-left register-color">登录密码</p>
				<input type="text" className="float-right" placeholder="请输入您的密码"/>
			</div>
			<div className="register-password split-line">
				<p className="float-left register-color">确认密码</p>
				<input type="text" className="float-right" placeholder="请再次输入您的密码"/>
			</div>
		</div>
		<div className="register-submit">
 			<button>立即注册</button>
 		</div>
 		<div className="register-link">
 			<p>注册则意味着您已经阅读并接受<a href="javascript:;">《xxx服务条款》</a></p>
 		</div>

    </div>
  }
});
