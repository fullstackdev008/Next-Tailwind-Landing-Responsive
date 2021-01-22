import React, {useLayoutEffect, useState} from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import CarouselCard from './CarouselCard'

function useWindowSize() {

  return size;
}

export default function CustomerSay({viewport}){
  const [settings, setSettings] = useState({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: viewport === 'desktop' ? 2.5 : 1.15,
    slidesToScroll: 1
  });

  return (
    <React.Fragment>
      {viewport === 'desktop' ? (
        <div className={'w-full flex flex-wrap customer-say-content'}>
          <div className={'w-2/5 flex flex-wrap comments-img-content'}>
            <div className={'w-full comments-img'}>
              <Image
                src={'/images/comment_bg1.png'}
                layout={'fill'}
              />
              <p className={'title'}>What <br/>Customers<br/>Say</p>
            </div>
          </div>
          <div className={'w-1/2 flex flex-wrap carousal-bg-content'}>
          </div>
          <div className={'w-3/5 flex flex-wrap carousal-content'}>
            <div className={'w-full flex flex-wrap slider-content'}>
              <div className={'w-full flex flex-wrap slider-main-content'}>
                <Slider {...settings}>
                  <CarouselCard type={'red'} viewport={viewport}>
                    {"I wanted something where I could meet new people and get out of the house. Uber has helped with both of those things, plus I’m seeing new parts of the city I’ve never seen before!"}
                  </CarouselCard>
                  <CarouselCard type={'white'} viewport={viewport}>
                    {"I wanted something where I could meet new people and get out of the house. Uber has helped with both of those things, plus I’m seeing new parts of the city I’ve never seen before!"}
                  </CarouselCard>
                  <CarouselCard type={'white'} viewport={viewport}>
                    {"I wanted something where I could meet new people and get out of the house. Uber has helped with both of those things, plus I’m seeing new parts of the city I’ve never seen before!"}
                  </CarouselCard>
                  <CarouselCard type={'white'} viewport={viewport}>
                    {"I wanted something where I could meet new people and get out of the house. Uber has helped with both of those things, plus I’m seeing new parts of the city I’ve never seen before!"}
                  </CarouselCard>
                  <CarouselCard type={'white'} viewport={viewport}>
                    {"I wanted something where I could meet new people and get out of the house. Uber has helped with both of those things, plus I’m seeing new parts of the city I’ve never seen before!"}
                  </CarouselCard>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={'w-full flex flex-wrap customer-say-content'}>
          <div className={'w-2/5 flex flex-wrap comments-img-content'}>
            <div className={'w-full comments-img'}>
              <Image
                src={'/images/comment_bg1.png'}
                layout={'fill'}
              />
              <p className={'title'}>What Customers Say</p>
            </div>
          </div>
          <div className={'w-3/5 flex flex-wrap carousal-content'}>
            <div className={'w-full flex flex-wrap slider-content'}>
              <div className={'w-full flex flex-wrap slider-main-content'}>
                <Slider {...settings}>
                  <CarouselCard type={'red'} viewport={viewport}>
                    {"I wanted something where I could meet new people and get out of the house. Uber has helped with both of those things, plus I’m seeing new parts of the city I’ve never seen before!"}
                  </CarouselCard>
                  <CarouselCard type={'white'} viewport={viewport}>
                    {"I wanted something where I could meet new people and get out of the house. Uber has helped with both of those things, plus I’m seeing new parts of the city I’ve never seen before!"}
                  </CarouselCard>
                  <CarouselCard type={'white'} viewport={viewport}>
                    {"I wanted something where I could meet new people and get out of the house. Uber has helped with both of those things, plus I’m seeing new parts of the city I’ve never seen before!"}
                  </CarouselCard>
                  <CarouselCard type={'white'} viewport={viewport}>
                    {"I wanted something where I could meet new people and get out of the house. Uber has helped with both of those things, plus I’m seeing new parts of the city I’ve never seen before!"}
                  </CarouselCard>
                  <CarouselCard type={'white'} viewport={viewport}>
                    {"I wanted something where I could meet new people and get out of the house. Uber has helped with both of those things, plus I’m seeing new parts of the city I’ve never seen before!"}
                  </CarouselCard>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      )}

    </React.Fragment>
  )
}
