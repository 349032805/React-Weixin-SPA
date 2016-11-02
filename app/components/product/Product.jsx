import React from 'react'
import './product.css'

export default React.createClass({
  render() {
    return (<div id="product">
         <div className="product">
            <div className="product-box">
              <div className="pure-g">
                  <div className="pure-u-1-4">
                      <img src="/images/iphone.png" width="auto" height="90" />
                  </div>
                   <div className="pure-u-3-4">
                      <div className="product-detail">
                        <p>2016新品发布 iPhoneSE全网通，办理电信融合套餐0元购机</p>
                        <div className="shop-price">
                          <div>
                            <i className="shop-icon"></i>苹果官方旗舰店
                            <div className="original-price">¥ 3000</div>
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
          
        </div>
    );
  }
});
