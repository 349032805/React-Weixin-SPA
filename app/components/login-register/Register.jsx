import React from 'react'
import './register.css'
import 'whatwg-fetch'
import service from '../common/config.jsx'
import { Router, Route,Link, browserHistory, IndexRoute } from 'react-router'
import TipBubble from '../modal/TipBubble.jsx'

var t;

export default  class Register extends React.Component {
 	constructor() {
        super();
        this.state = {
          phoneNumber:'',
          verifyCode:'',
          errorTip:'',
          isShow:'',
          btnText:'获取验证码',
          disabled:'',
          isLight:'verifycode-btn'
        };
    }

    handleChange = (name,event) =>{
    	var newState = {};
		newState[name] = event.target.value;
		this.setState(newState);
  	}

    nextBtnClick = (event) => {

  	}

  	verifyCodeBtnClick = (event) => {
  		var _phoneNumber = this.state.phoneNumber;
  		if(_phoneNumber ==""){
  			this.showError("请输入手机号");
  			return;
  		}
  		var phoneRegular = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
  		if(!phoneRegular.test(_phoneNumber)){
			this.showError("手机号错误");
  			return;
  		}

  		//手机号格式正确后,请求验证手机号是否已经存在
  		this.checkPhoneIsExist();
  	}

  	showError = (errorTip) => {
		this.setState({errorTip:errorTip});
		this.setState({isShow:"tip-bubble-show"});
		setTimeout(this.hideTipBubble,3000);
  	}

  	hideTipBubble = () => {
  		this.setState({isShow:"tip-bubble-hide"});
  	}

  	checkPhoneIsExist = () => {
  		var _this  = this;
  		//检查手机号是否存在
        fetch(service.SERVER_HOST+"/users/mobilevalidator", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            mode: "cors",
            body: JSON.stringify({
            "mobile":_this.state.phoneNumber
            })
        }) 
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
        	alert(result.code);
        	alert(result.message);
          if(result.code ==0){
          	//如果可用,倒计时并发送验证码
          	_this.countDown();
          	_this.sendVerifyCode();
          }else{
			_this.showError("手机号已存在");
          }
        });
  	}

  	//倒计时
  	countDown = () => {
  		//按钮禁用,变灰色
		this.setState({disabled:'disabled',isLight:'verifycode-btn-disabled'});
  		var seconds = 60;
  		this.setState({btnText:seconds});
		t = setInterval(this.clock,1000);
  	}

  	clock = () => {
  		var _btnText = this.state.btnText;
  		if(_btnText == 0){
  			clearInterval(t);
  			this.setState({btnText:"获取验证码"});
  			this.setState({disabled:'',isLight:'verifycode-btn'});
  		}else{
  			this.setState({btnText:this.state.btnText - 1});
  		}
  		
  	}

  	//发送验证码
  	sendVerifyCode = () => {
	    var _this = this;

	    
  	}

  render() {
    return <div id="register">
	<div className="register-box">
			<div className="register-num">
				<p className="float-left register-color">手机号</p>
				<input type="number" className="float-right" placeholder="请输入您的手机号" onChange={this.handleChange.bind(this,'phoneNumber')}/>
			</div>
			<div className="register-password split-line">
				<p className="float-left register-color" style={{width:'30%'}}>验证码</p>
				<div className="float-right" style={{width:'70%'}}>
					<button className={this.state.isLight} onClick={this.verifyCodeBtnClick} disabled={this.state.disabled}>{this.state.btnText}</button>
					<input type="number" className="register-number" onChange={this.handleChange.bind(this,'verifyCode')}/> 
				</div>
			</div>
		</div>
		<div className="register-submit">
 			<button type="button" onClick={this.nextBtnClick}>下一步</button>
 		</div>
 		<div className="register-link">
 			<a href="javascript:;" className="float-left">已有账号？</a>
 			<a href="javascript:;" className="float-right">接收语音验证码</a>
 		</div>

 		<TipBubble text={this.state.errorTip} className={this.state.isShow}/>

    </div>
  }
}
