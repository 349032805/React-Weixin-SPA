import React from 'react'
import './modal.css'

export default React.createClass({
  render() {
    return <div id="noAuthModal">
	    <div className="base-modal">
			<div className="split-line">
				<p className="modal-tip">您尚未进行实名认证，不能享受分期付款业务。</p>
			</div>
			<div className="opt-btn">
				<button className="btn">去实名认证</button>
				<button>继续购物</button>
			</div>
	    </div>

    </div>
  }
});
