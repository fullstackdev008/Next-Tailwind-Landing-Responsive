import React from 'react'
import Image from 'next/image'

export default function CarouselCard({type, children, viewport}){
  return (
    <React.Fragment>
      {viewport === 'desktop' ? (
        <div className={`flex flex-wrap ${type == "red" ? "item-red" : "item-white"}`}>
          <div className={'w-full flex flex-wrap'}>
            <div className={'flex flex-wrap dot-img-content'}>
              <div className={'w-full dot-img'}>
                <Image src={`${type == "red" ? '/images/dot_white.png' : '/images/dot_red.png'}`} layout={'fill'}/>
              </div>
            </div>
            <div className={'flex dot-img-content'}>
              <div className={'w-full dot-img'}>
                <Image src={`${type == "red" ? '/images/dot_white.png' : '/images/dot_red.png'}`} layout={'fill'}/>
              </div>
            </div>
          </div>
          <div className={'w-full flex flex-wrap description-content'}>
            <p>{children}</p>
          </div>
        </div>
      ) : (
        <div className={`flex flex-wrap ${type == "red" ? "item-red" : "item-white"}`}>
          <div className={'w-full flex flex-wrap'}>
            <div className={'flex flex-wrap dot-img-content'}>
              <div className={'w-full dot-img'}>
                <Image src={`${type == "red" ? '/images/dot_white.png' : '/images/dot_red.png'}`} layout={'fill'}/>
              </div>
            </div>
            <div className={'flex dot-img-content'}>
              <div className={'w-full dot-img'}>
                <Image src={`${type == "red" ? '/images/dot_white.png' : '/images/dot_red.png'}`} layout={'fill'}/>
              </div>
            </div>
          </div>
          <div className={'w-full flex flex-wrap description-content'}>
            <p>{children}</p>
          </div>
        </div>
      )}

    </React.Fragment>
  )
}