import React from 'react'
import Slider from 'react-slick'

export default React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };
    return (
        <Slider {...settings}>
          <div><img src='/images/banner_test1.png' /></div>
          <div><img src='/images/banner_test2.png' /></div>
        </Slider>
    );
  }
});