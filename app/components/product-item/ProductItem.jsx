import React from 'react'
import 'whatwg-fetch'
import { Router, Route,Link, browserHistory, IndexRoute } from 'react-router'
import service from '../common/config.jsx'
import '../product/product.css'

export default class LoadList extends React.Component {
    constructor() {
        super();
        this.state = {
            renderArr: [],
            pageIndex: 1,
            pageCount: 0,
            bottomTxt: '',
        };
    }
    loadList = () => {
        var _this = this;
        fetch(service.SERVER_HOST+"/products/goods", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: "cors",
            body: JSON.stringify({
            "pageNo":_this.state.pageIndex
            })
        }) 
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
           var res = result.data;
             console.log("--------pageNo:"+res.pagination.pageNo);
             console.log("--------pageSize:"+res.pagination.pageSize);
             console.log("--------pages:"+res.pagination.pages);
             console.log("--------total:"+res.pagination.total);
            _this.pageCount = res.pagination.pages;
            _this.setState({pageCount: _this.pageCount});
            if(_this.state.pageIndex == 1){
                _this.setState({renderArr: res.list})
            }else{
                _this.setState({renderArr: _this.state.renderArr.concat(res.list)})
            }
            _this.setState({pageIndex: _this.state.pageIndex+1},function(){
                console.log("pageIndex",_this.state.pageIndex);})
        });
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }
    componentDidMount() {
        this.loadList();
        document.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        var _this = this;
        var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
        var clientHeight = document.documentElement.clientHeight;
        if(Number(scrolltop + clientHeight)==document.body.clientHeight){
            if (_this.state.pageIndex <= _this.state.pageCount){
                _this.loadList();
            }else{
                _this.setState({bottomTxt: '已经到底了'});
            }
        }
    }

    render() {
        var _this = this;
        var repoList = this.state.renderArr.map(function (product,index) {
            return (
                <li key={index}>
                    <Link to={{pathname:"/productDetail",query:{goodsId:product.goodsId,cateId:product.cateId}}}>
                        <div id="product">
                             <div className="product">
                                  <div className="pure-g">
                                      <div className="pure-u-1-4">
                                          <img src="/images/iphone.png" width="auto" height="90" />
                                      </div>
                                       <div className="pure-u-3-4">
                                          <div className="product-detail">
                                            <p>{index}:{product.goodsId}:{product.title}</p>
                                            <div className="shop-price">
                                              <div>
                                                <i className="shop-icon"></i> &nbsp;{product.storeName}
                                                <div className="original-price">¥ {product.marketPrice}</div>
                                              </div>
                                              <div className="sale-status">
                                                <div className="float-left">已售110件</div>
                                                <div className="float-right">月供：¥ <span className="key-price">999.00</span> X 12期</div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                  </div>
                                </div>
                              
                            </div>
                    </Link>
                </li>
            );
        });
        return(
            <div className="list">
                <ul>{repoList}</ul>
                { _this.state.bottomTxt?<div className="nomore">
                    <span className="install-line1"></span>
                    <p className="nomore-tip">{_this.state.bottomTxt}</p>
                    <span className="install-line2"></span>
                </div>:null }
            </div>
        )
  }
}