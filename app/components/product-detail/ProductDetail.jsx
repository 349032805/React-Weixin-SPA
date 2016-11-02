import React from 'react'
import 'whatwg-fetch'
import service from '../common/config.jsx'
import { Router, Route,Link, browserHistory, IndexRoute } from 'react-router'
import FooterBtn from '../footer-btn/FooterBtn.jsx'
import NoAuthModal from '../modal/NoAuthModal.jsx'
import './productDetail.css'
import utilities from '../common/Utilities.jsx'

var goodsId = utilities.getParameterByName('goodsId');
var cateId = utilities.getParameterByName('cateId');
console.log(goodsId);
console.log(cateId);
var params = "goodsId="+goodsId;


export default class ProductDetail extends React.Component{
	 constructor() {
        super();
        this.state = {
           productDetail: {},
           periodPayList:[],
           propertyList1:[],
           propertyList2:[],
           propertyList3:[],
           propertyList4:[],
           propertyList5:[],
           skus:[],
           clickNum:1,
           attrId:'',
           attrId2:'',
           attrId3:'',
           attrId4:'',
           attrId5:'',
           valId:'',
           valId2:'',
           valId3:'',
           valId4:'',
           valId5:'',
           attrName:'',
           attrName2:'',
           attrName3:'',
           attrName4:'',
           attrName5:'',
           titleSize:0,
           selectNum:0,
           sku:'',
           salesPrice:0,
           minPercent:0,
           firstPay:0,
           totalPay:0,
           stock:0,
           periodNum:0,
        };
    }

    loadDetail = () => {
        var _this = this;
        fetch(service.SERVER_HOST+"/products/goods/"+goodsId, {
            method: 'GET',
            mode: "cors"
        }) 
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
	         var res = result.data;
	         console.log("--------storeName:"+res.storeName);
	         console.log("--------brandName:"+res.brandName);
	         console.log("--------title:"+res.title);
	         console.log("--------res.installment:"+res.installment);
	         _this.setState({productDetail: res});
	         _this.setState({salesPrice: res.salesPrice});
           _this.setState({minPercent: res.minPercent});
           var _firstPay = res.salesPrice*res.minPercent/100;
	         _this.setState({firstPay: _firstPay});
	         _this.setState({skus: JSON.parse(res.skus)});
           _this.setState({periodPayList: JSON.parse(res.installment)});

           //分期
           _this.setState({totalPay: res.salesPrice - _firstPay});
        });
    }

     loadProperty = () => {
        var _this = this;
        fetch(service.SERVER_HOST+"/products/goods/"+goodsId+"/skuAttrs", {
            method: 'GET',
            mode: "cors"
        }) 
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
	         _this.setState({titleSize: result.data.length});

	          var _titleSize = result.data.length;
	          if(_titleSize == 1){
          		 _this.setState({attrId: result.data[0].attrId});
          		 _this.setState({propertyList1: JSON.parse(result.data[0].valItems)});
          		 _this.setState({attrName: result.data[0].attrName});
	          }

	           if(_titleSize == 2){
          		 _this.setState({attrId: result.data[0].attrId});
          		 _this.setState({propertyList1: JSON.parse(result.data[0].valItems)});
          		 _this.setState({attrName: result.data[0].attrName});

          		 _this.setState({attrId2: result.data[1].attrId});
          		 _this.setState({propertyList2: JSON.parse(result.data[1].valItems)});
          		 _this.setState({attrName2: result.data[1].attrName});
	          }

	           if(_titleSize == 3){
          		 _this.setState({attrId: result.data[0].attrId});
          		 _this.setState({propertyList1: JSON.parse(result.data[0].valItems)});
          		 _this.setState({attrName: result.data[0].attrName});

          		 _this.setState({attrId2: result.data[1].attrId});
          		 _this.setState({propertyList2: JSON.parse(result.data[1].valItems)});
          		 _this.setState({attrName2: result.data[1].attrName});

          		 _this.setState({attrId3: result.data[2].attrId});
          		 _this.setState({propertyList3: JSON.parse(result.data[2].valItems)});
          		 _this.setState({attrName3: result.data[2].attrName});
	          }

	           if(_titleSize == 4){
          		 _this.setState({attrId: result.data[0].attrId});
          		 _this.setState({propertyList1: JSON.parse(result.data[0].valItems)});
          		 _this.setState({attrName: result.data[0].attrName});

          		 _this.setState({attrId2: result.data[1].attrId});
          		 _this.setState({propertyList2: JSON.parse(result.data[1].valItems)});
          		 _this.setState({attrName2: result.data[1].attrName});

          		 _this.setState({attrId3: result.data[2].attrId});
          		 _this.setState({propertyList3:JSON.parse(result.data[2].valItems)});
          		 _this.setState({attrName3: result.data[2].attrName});

          		 _this.setState({attrId4: result.data[3].attrId});
          		 _this.setState({propertyList4:JSON.parse(result.data[3].valItems)});
          		 _this.setState({attrName4: result.data[3].attrName});
	          }

	           if(_titleSize == 5){
          		 _this.setState({attrId: result.data[0].attrId});
          		 _this.setState({propertyList1: JSON.parse(result.data[0].valItems)});
          		 _this.setState({attrName: result.data[0].attrName});

          		 _this.setState({attrId2: result.data[1].attrId});
          		 _this.setState({propertyList2:JSON.parse(result.data[1].valItems)});
          		 _this.setState({attrName2: result.data[1].attrName});

          		 _this.setState({attrId3: result.data[2].attrId});
          		 _this.setState({propertyList3:JSON.parse(result.data[2].valItems)});
          		 _this.setState({attrName3: result.data[2].attrName});

          		 _this.setState({attrId4: result.data[3].attrId});
          		 _this.setState({propertyList4: JSON.parse(result.data[3].valItems)});
          		 _this.setState({attrName4: result.data[3].attrName});

          		 _this.setState({attrId5: result.data[4].attrId});
          		 _this.setState({propertyList5: JSON.parse(result.data[4].valItems)});
          		 _this.setState({attrName5: result.data[4].attrName});
	          }

        });
    }

    handleClick = (name,event) => {
    	var _clickNum = this.state.clickNum;
    	if(name=="add"){
    		_clickNum = this.state.clickNum+1;
        var _totalPay = this.state.totalPay;
        _totalPay += this.state.salesPrice - this.state.firstPay;
        this.setState({totalPay: _totalPay});

    	}else{
    		if(_clickNum !==1){
    			_clickNum = this.state.clickNum-1;
           var _totalPay = this.state.totalPay;
          _totalPay -= this.state.salesPrice - this.state.firstPay;
          this.setState({totalPay: _totalPay});

    		}
    	}
       this.setState({clickNum:_clickNum});
    }

    clickBtnList1 = (obj,event) => {
    	this.setState({valId : obj.valId});
    	this.afterSelect(obj.valId,1);
    }

    clickBtnList2 = (obj,event) => {
    	this.setState({valId2 : obj.valId});
    	this.afterSelect(obj.valId,2);
    }

    clickBtnList3 = (obj,event) => {
    	this.setState({valId3 : obj.valId});
    	this.afterSelect(obj.valId,3);
    }

    clickBtnList4 = (obj,event) => {
    	this.setState({valId4 : obj.valId});
    	this.afterSelect(obj.valId,4);
    }

    clickBtnList5 = (obj,event) => {
    	this.setState({valId5 : obj.valId});
    	this.afterSelect(obj.valId,5);
    }

    clickPeriodBtnList = (num,event) => {
     this.setState({periodNum : num});
    }


    afterSelect = (valId,sequence) => {
    	var _skus = this.state.skus;
    	var _titleLength = this.state.titleSize;
    	if(this.state.selectNum <_titleLength-1){
			   this.setState({selectNum:this.state.selectNum+1});
    	}else{
        //分组定义
        var group1 = this.state.attrId+":";
        var group2 = this.state.attrId2+":";
        var group3 = this.state.attrId3+":";
        var group4 = this.state.attrId4+":";
        var group5 = this.state.attrId5+":";

        if(sequence ==1){
          group1 += valId;
        }else{
          group1 += this.state.valId;
        }

        if(sequence ==2){
          group2 += valId;
        }else{
          group2 += this.state.valId2;
        }

        if(sequence ==3){
          group3 += valId;
        }else{
          group3 += this.state.valId3;
        }

        if(sequence ==4){
          group4 += valId;
        }else{
          group4 += this.state.valId4;
        }

        if(sequence ==5){
          group5 += valId;
        }else{
          group5 += this.state.valId5;
        }

    		if(_titleLength ==1){
    			var _sku = this.state.attrId+":"+valId;

           for(var i =0;i<_skus.length;i++){
            console.log("-----------all salesPrice:"+_skus[i].salesPrice+"   skuArr:"+_skus[i].sku);
            if(_sku == _skus[i].sku){
              console.log("-----------target_sku:"+_sku);
              console.log("-----------target_salesPrice:"+_skus[i].salesPrice);

              this.resetPeriodPay(_skus[i].salesPrice);
            }
          }
    		}

    		if(_titleLength ==2){
          for(var i =0;i<_skus.length;i++){
            console.log("-----------all salesPrice:"+_skus[i].salesPrice+"   skuArr:"+_skus[i].sku);
            if(_skus[i].sku.includes(group1) && _skus[i].sku.includes(group2)){
              console.log("-----------target_sku:"+_skus[i].sku);
              console.log("-----------target_salesPrice:"+_skus[i].salesPrice);

              this.resetPeriodPay(_skus[i].salesPrice);
            }
          }
    		}

        if(_titleLength ==3){
          for(var i =0;i<_skus.length;i++){
            console.log("-----------all salesPrice:"+_skus[i].salesPrice+"   skuArr:"+_skus[i].sku);
            if(_skus[i].sku.includes(group1) && _skus[i].sku.includes(group2) && _skus[i].sku.includes(group3)){
              console.log("-----------target_sku:"+_skus[i].sku);
              console.log("-----------target_salesPrice:"+_skus[i].salesPrice);

              this.resetPeriodPay(_skus[i].salesPrice);
            }
          }
        }

        if(_titleLength ==4){
          for(var i =0;i<_skus.length;i++){
            console.log("-----------all salesPrice:"+_skus[i].salesPrice+"   skuArr:"+_skus[i].sku);
            if(_skus[i].sku.includes(group1) && _skus[i].sku.includes(group2) && _skus[i].sku.includes(group3) && _skus[i].sku.includes(group4)){
              console.log("-----------target_sku:"+_skus[i].sku);
              console.log("-----------target_salesPrice:"+_skus[i].salesPrice);

              this.resetPeriodPay(_skus[i].salesPrice);
            }
          }
        }

        if(_titleLength ==5){
          for(var i =0;i<_skus.length;i++){
            console.log("-----------all salesPrice:"+_skus[i].salesPrice+"   skuArr:"+_skus[i].sku);
            if(_skus[i].sku.includes(group1) && _skus[i].sku.includes(group2) && _skus[i].sku.includes(group3) && _skus[i].sku.includes(group4) && _skus[i].sku.includes(group5)){
              console.log("-----------target_sku:"+_skus[i].sku);
              console.log("-----------target_salesPrice:"+_skus[i].salesPrice);

              this.resetPeriodPay(_skus[i].salesPrice);
            }
          }
        }

    	}
    }

    resetPeriodPay = (targetPrice) =>{
      this.setState({salesPrice:targetPrice});

      var _this_firstPay = targetPrice*this.state.minPercent/100;
      this.setState({firstPay:_this_firstPay});
      this.setState({totalPay:targetPrice - _this_firstPay});
    }

    isAuth = () =>{
      alert(1);
    }

    componentDidMount() {
        this.loadDetail();
        this.loadProperty();
    }

  render() {
  	var _this = this;
  	var btnsList1 = this.state.propertyList1.map(function (propertyObj,index) {
        return (
           <button type="botton" className={propertyObj.valId == _this.state.valId?"active-btn":"select-btn"} key={index} onClick={_this.clickBtnList1.bind(_this,propertyObj)}>{propertyObj.valName}</button>
        );
    });

    var btnsList2 = this.state.propertyList2.map(function (propertyObj,index) {
        return (
           <button type="botton" className={propertyObj.valId == _this.state.valId2?"active-btn":"select-btn"} key={index} onClick={_this.clickBtnList2.bind(_this,propertyObj)}>{propertyObj.valName}</button>
        );
    });

    var btnsList3 = this.state.propertyList3.map(function (propertyObj,index) {
        return (
           <button type="botton" className={propertyObj.valId == _this.state.valId3?"active-btn":"select-btn"} key={index} onClick={_this.clickBtnList3.bind(_this,propertyObj)}>{propertyObj.valName}</button>
        );
    });

    var btnsList4 = this.state.propertyList4.map(function (propertyObj,index) {
        return (
           <button type="botton" className={propertyObj.valId == _this.state.valId4?"active-btn":"select-btn"} key={index} onClick={_this.clickBtnList4.bind(_this,propertyObj)}>{propertyObj.valName}</button>
        );
    });

    var btnsList5 = this.state.propertyList5.map(function (propertyObj,index) {
        return (
           <button type="botton" className={propertyObj.valId == _this.state.valId5?"active-btn":"select-btn"} key={index} onClick={_this.clickBtnList5.bind(_this,propertyObj)}>{propertyObj.valName}</button>
        );
    });

    var periodPayBtnList = this.state.periodPayList.map(function (periodNum,index) {
        return (
           <button type="botton" className={periodNum == _this.state.periodNum?"active-btn":"select-btn"} key={index} onClick={_this.clickPeriodBtnList.bind(_this,periodNum)}>{"¥ "+_this.state.totalPay/periodNum+" x "+periodNum+" 期"}</button>
        );
    });


    return <div id="productDetail">
    	<div className="product-intro">
			<img src="/images/product_intro.jpg" className="product-logo"/>
			<div className="price-sale">
				<div className="sale-title">{_this.state.productDetail.title}</div>
				<div className="pure-g">
					<div className="pure-u-1-2">¥ {_this.state.salesPrice}</div>
			     	<div className="pure-u-1-2 text-right">最低首付：¥ <span className="key-price">{_this.state.firstPay}</span></div>
				</div>
				<div className="pure-g">
					<div className="pure-u-1-2 font-12">已售{_this.state.productDetail.sales}件</div>
			     	<div className="pure-u-1-2 text-right font-12">{_this.state.stock>0?"有货":"无货"}</div>
				</div>
			</div>
			<div className="pure-g shop-phone">
				<div className="pure-u-1-2">
					<img src="/images/shop_icon.png" className="shop-icon"/>{_this.state.productDetail.storeName}
				</div>
		     	<div className="pure-u-1-2 text-right">
		     		<a href="tel:18702121893">
		     			<img src="/images/shop_telephone.png" className="shop-icon"/>客服电话
		     		</a>
		     	</div>
			</div>
 		</div>


 		<div className="product-format">
 			<div className="format-index">
 				<div className={_this.state.titleSize>0?"show":"hide"}>
		 			<p className="small-title">选择{_this.state.attrName}</p>
		 			<div className="pure-g">
		 				<div className="pure-u-1-1">
			     			{btnsList1}
			     		</div>
		 			</div>
	 			</div>

	 			<div className={_this.state.titleSize>1?"show":"hide"}>
		 			<p className="small-title">选择{_this.state.attrName2}</p>
		 			<div className="pure-g">
		 				<div className="pure-u-1-1">
			     		{btnsList2}
			     		</div>
		 			</div>
	 			</div>

	 			<div className={_this.state.titleSize>2?"show":"hide"}>
		 			<p className="small-title">选择{_this.state.attrName3}</p>
		 			<div className="pure-g">
		 				<div className="pure-u-1-1">
			     		{btnsList3}
			     		</div>
		 			</div>
	 			</div>

	 			<div className={_this.state.titleSize>3?"show":"hide"}>
		 			<p className="small-title">选择{_this.state.attrName4}</p>
		 			<div className="pure-g">
		 				<div className="pure-u-1-1">
			     		{btnsList4}
			     		</div>
		 			</div>
	 			</div>

	 			<div className={_this.state.titleSize>4?"show":"hide"}>
		 			<p className="small-title">选择{_this.state.attrName5}</p>
		 			<div className="pure-g">
		 				<div className="pure-u-1-1">
			     		{btnsList5}
			     		</div>
		 			</div>
	 			</div>

	 			<p className="small-title">选择分期套餐</p>
	 			<div className="pure-g">
	 				<div className="pure-u-1-1">
		     		{periodPayBtnList}
		     		</div>
	 			</div>
 			</div>

 			<div className="pure-g select-amount">
 				<div className="pure-u-1-2">选择数量</div>
 				<div className="pure-u-1-2">
 					<div className="add-minus-num">
 						<button type="button" className="minus-btn" onClick={this.handleClick.bind(this,'minus')}>
 							<img src="/images/minus.png" className="add-minus-sign"/>
 						</button>
 						<div className="num-box">{_this.state.clickNum}</div>
 						<button type="button" className="add-btn" onClick={this.handleClick.bind(this,'add')}>
 							<img src="/images/plus.png" className="add-minus-sign"/>
 						</button>
 					</div>
 				</div>
 			</div>

 			<div className="service-tip">
 				<div className="tip-left">
 					<p style={{color:'#999'}}>提示：分期付款方案以信用审核实际结果为准</p>
 				</div>
 			</div>

 		</div>

<Link to={{pathname:"/productIntro",query:{goodsId:goodsId}}}>
 		<div className="pure-g intro-detail">
			<div className="pure-u-1-2">商品介绍</div>
			<div className="pure-u-1-2">
				<span className="arrow"></span>
			</div>
		</div>
 </Link>

		<FooterBtn text="立即下单" go="/orderConfirm" params={params} action={this.isAuth}/>
		
		<div className="bg-layer"></div>
		<NoAuthModal />

    </div>
  }
}
