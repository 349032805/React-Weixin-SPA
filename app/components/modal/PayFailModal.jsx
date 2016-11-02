import React from 'react'
import './modal.css'

export default React.createClass({
  render() {
    return <div id="payFailModal">
	    <div className="base-modal">
			<div className="split-line">
				<p className="modal-tip">支付失败，请重试或选择其他的支付方式</p>
				<p className="modal-tip2">您的银行卡内余额不足！</p>
			</div>
			<div className="opt-btn">
				<button className="btn">重试</button>
				<button>取消</button>
			</div>
	    </div>

    </div>
  }
});
