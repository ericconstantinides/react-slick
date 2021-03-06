import React, { Component } from 'react'
import Slider from '../src/slider'

export default class VerticalMode extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function (currentslide, nextSlide) {
        console.log('before change', currentslide, nextSlide);
      },
      afterChange: function (currentslide) {
        console.log('after change', currentslide);
      },
    };
    return (
      <div>
        <h2>Vertical Mode</h2>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
      </div>
    );
  }
}
