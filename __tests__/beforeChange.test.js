import React from 'react';
import {mount} from 'enzyme';
import Slider from '../src/index';

class SliderWithBeforeChange extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentslide: null,
      nextSlide: null
    }
    this.beforeChange = this.beforeChange.bind(this)
  }
  beforeChange(currentslide, nextSlide) {
    this.setState({
      currentslide,
      nextSlide
    })
  }
  render() {
    return (
      <Slider waitForAnimate={false} beforeChange={this.beforeChange}>
        <div>slide1</div>
        <div>slide2</div>
        <div>slide3</div>
        <div>slide4</div>
      </Slider>
    )
  }
}

describe('Slider', function() {
  it('should render', function() {
    const wrapper = mount(<SliderWithBeforeChange />);
    wrapper.find('.slick-next').simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual('slide2');
    expect(wrapper.state()).toEqual({currentslide: 0, nextSlide: 1})
    wrapper.find('.slick-next').simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual('slide3');
    expect(wrapper.state()).toEqual({currentslide: 1, nextSlide: 2})
    wrapper.find('.slick-prev').simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual('slide2');
    expect(wrapper.state()).toEqual({currentslide: 2, nextSlide: 1})
  });
});
