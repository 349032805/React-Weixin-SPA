import React from 'react'
import './twoBtns.css'

export default React.createClass({
	getInitialState:function(){
		return {
			leftText:this.props.leftText,
			rightText:this.props.rightText,
		};
	},

//可以选择直接用 console.log(this.props.text);
//也可以选择　getInitialState　里面加个state 然后用this.props.text
//如果是选择第一种，那么你更新就要更新父级的状态，
//第二种就直接更新本组件的state

  render() {
    return <div id="twoBtns">
			<button className="btn del-btn" type="button">{this.state.leftText}</button>
 			<button className="btn sub-btn" type="button">{this.state.rightText}</button>
		</div>
  }
});
