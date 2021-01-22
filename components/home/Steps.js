import React, { useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick/lib'

export default function Steps({viewport}){
  const [settings, setSettings] = useState({
    dots: true,
    infinite: false,
    centerMode: true,
    slidesToShow: 1.3,
    slidesToScroll: 1,
    initialSlide: 1
  });

  return (
    <React.Fragment>
      {viewport === 'desktop' ? (
        <div className={'w-full flex flex-wrap justify-center passion-title-content'}>
          <p className={'w-full flex justify-center'}>
            {'“Concéntrate en tu pasión'}
            <br/>
            {' y nosotros hacemos todo lo demás”'}
          </p>
          <div className={'steps-img'}>
            <Image
              src={'/images/steps.png'}
              layout={'fill'}
            />
            <div className={'w-full flex justify-center grid grid-cols-5 gap-4 steps-texts'}>
              <span>REGÍSTRATE</span>
              <span>SUBE TU CONTENIDO</span>
              <span>PERSONALÍZALO</span>
              <span>ANALIZA LA AUDIENCIA</span>
              <span>MONETIZA</span>
            </div>
          </div>
        </div>
      ) : (
        <div className={'w-full flex flex-wrap justify-center passion-title-content'}>
          <p className={'w-full flex justify-center'}>
            {'“Concéntrate en tu pasión'}
            <br/>
            {' y nosotros hacemos todo lo demás”'}
          </p>
          <div className={'w-full flex flex-wrap steps-slider-content'}>
            <span className={'icon-next-slider-arrow'}>{'>'}</span>
            <Slider {...settings}>
              <div className={'w-full flex flex-wrap steps-slider-item'}>
                <div className={'w-full flex flex-wrap justify-center'}>
                  <div className={'steps-img'}>
                    <Image
                      src={'/images/step1.png'}
                      layout={'fill'}
                    />
                  </div>
                </div>
                <p className={'w-full flex justify-center step-title'}>REGÍSTRATE</p>
              </div>
              <div className={'w-full flex flex-wrap steps-slider-item'}>
                <div className={'w-full flex flex-wrap justify-center'}>
                  <div className={'steps-img'}>
                    <Image
                      src={'/images/step2.png'}
                      layout={'fill'}
                    />
                  </div>
                </div>
                <p className={'w-full flex justify-center step-title'}>SUBE TU CONTENIDO</p>
              </div>
              <div className={'w-full flex flex-wrap steps-slider-item'}>
                <div className={'w-full flex flex-wrap justify-center'}>
                  <div className={'steps-img'}>
                    <Image
                      src={'/images/step3.png'}
                      layout={'fill'}
                    />
                  </div>
                </div>
                <p className={'w-full flex justify-center step-title'}>PERSONALÍZALO</p>
              </div>
              <div className={'w-full flex flex-wrap steps-slider-item'}>
                <div className={'w-full flex flex-wrap justify-center'}>
                  <div className={'steps-img'}>
                    <Image
                      src={'/images/step4.png'}
                      layout={'fill'}
                    />
                  </div>
                </div>
                <p className={'w-full flex justify-center step-title'}>ANALIZA LA AUDIENCIA</p>
              </div>
              <div className={'w-full flex flex-wrap steps-slider-item'}>
                <div className={'w-full flex flex-wrap justify-center'}>
                  <div className={'steps-img'}>
                    <Image
                      src={'/images/step5.png'}
                      layout={'fill'}
                    />
                  </div>
                </div>
                <p className={'w-full flex justify-center step-title'}>MONETIZA</p>
              </div>
            </Slider>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}