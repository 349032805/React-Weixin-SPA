import React from 'react'
import './tipBubble.css'

export default class TipBubble extends React.Component {
	 constructor(props) {
        super(props);
        this.state = {

        };
    }

  render() {
    return <div id="tipBubble">
			<button className={this.props.className} type="button" style={this.props.style}>{this.props.text}</button>
    </div>
  }
}
