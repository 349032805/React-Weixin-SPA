import React from 'react'
import Slider from '../lib/Slider.jsx'
import NavLink from '../lib/NavLink.jsx'
import Product from '../product/Product.jsx'
import './home.css'

export default React.createClass({
  render() {
    return (
        <div id="home">
            <div className="banner">
                <div className="location-search-msg">
                    <div className="ban-box">
                        <a href="#" className="location sign">
                            <p>上海</p>
                        </a>
                        <div className="input-box">
                            <input type="text" className="search-input" />
                        </div>

                    </div>
                </div>

                <div className="swiper-container">
                    <Slider />
                </div>
            </div>

            <div className="class-tab">
                <div className="class-tab-box">
                    <a className="class-tab-img" href="/productItem">
                        <img src="/images/class_ban1.png"/>
                    </a>
                    <a className="class-tab-img" href="/productItem">
                        <img src="/images/class_ban2.png" />
                    </a>
                </div>
            </div>

            <div className="ad">
                <div className="ad-column">
                    <div className="ad-box">
                        <img src="/images/ad_big.png" height="140" />
                    </div>
                    <div className="vertical-line"></div>
                </div>
                <div className="ad-column">
                    <div className="ad-small-block">
                        <img src="/images/ad_small1.png" width="100%" height="100%" />
                        <div className="horizontal-line"></div>
                    </div>
                    <div className="ad-small-block">
                        <img src="/images/ad_small2.png" width="100%" height="100%" />
                    </div>
                </div>
            </div>

            <div className="hot-sold">
                <div className="theme">
                    <div className="theme-title">热卖特惠</div>
                    <a className="theme-more" href="#">更多 &nbsp;<span className="arrow"></span> </a>
                </div>

                <div className="ad" style={{height: '115px'}}>
                    <div className="ad-column">
                        <div className="ad-box">
                            <img src="/images/hot_sold1.png" height="105" />
                        </div>
                        <div className="vertical-line" style={{height: '115px'}}></div>
                    </div>
                    <div className="ad-column">
                        <div className="ad-box">
                            <img src="/images/hot_sold2.png" height="105" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="new-product">
                <div className="theme">
                    <div className="theme-title">新品发售</div>
                    <a className="theme-more" href="#">更多 &nbsp;<span className="arrow"></span> </a>
                </div>

                <Product />
            </div>
        </div>
        
    )
  }
});
