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
			<button className="tip-bubble" type="button" style={this.props.style}>Hello World!</button>
    </div>
  }
}
