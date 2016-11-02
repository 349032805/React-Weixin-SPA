import React from 'react'
import './footerBtn.css'

export default class FooterBtn extends React.Component {
	 constructor(props) {
        super(props);
        this.state = {
           text:props.text,
           url:props.go,
           params:props.params
        };
    }

 	okBtnClick = (event) => {
 		var url = this.state.url;
 		var params = this.state.params;
 		if(url != ""){
 			location.href=url+"?"+params;
 		}else{
 			this.props.action();
 		}
 		
  }

  render() {
    return <div className="ok-block">
			<button type="button" className="submit-btn" onClick={this.okBtnClick}>{this.state.text}</button>
		</div>
  }
}
