import React from 'react'
import Qiniu from 'react-qiniu'
import 'whatwg-fetch'
import service from '../common/config.jsx'

export default class ReactQiniuDemo extends React.Component{

     constructor() {
        super();
        this.state = {
            files: [],
            token: '',
            // uploadKey: 'iPhone6Plus.jpg', 
            //prefix: 'YOUR_QINIU_KEY_PREFIX'
            hashName:'',
            previewUrl:''
        };
    }

    onUpload = (files) =>{
    	var _this = this;
        files.map(function (f) {
            f.onprogress = function(e) {
	        	console.log(e.percent);
	        	if(e.percent == 100){
	        		var res = f.request.xhr.response;
	        		if(res != null && res !=""){
	        	 		res = JSON.parse(res);
						_this.setState({previewUrl: f.preview});
		                console.log("--------hashName:"+res.key);
		                _this.setState({hashName: res.key});
	        	 	}
	        	}
            };
 			console.log(f);
        });
    }

    onDrop = (files) => {
        this.setState({
            files: files
        });
      // console.log('Received files: ', files);
    }

    getToken = () =>{
    	 var _this = this;
    	 fetch(service.SERVER_HOST+"/qnuptokens", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: "cors",
            body: JSON.stringify({
            	"bucket":'fy-dev'
            })
        }) 
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
	         var res = JSON.parse(result.data);
	         console.log("--------token:"+res.uptoken);
	          _this.setState({token: res.uptoken});
	        
        });
    }

    componentDidMount() {
        this.getToken();
    }

  render() {
    return <div>
	  <Qiniu onDrop={this.onDrop} size={150} token={this.state.token} onUpload={this.onUpload}>
          <div>Try dropping some files here, or click to select files to upload.</div>
       </Qiniu>
       <img src={this.state.previewUrl} style={{width:'100px',height:'100px'}}/>
    </div>
  }
}

