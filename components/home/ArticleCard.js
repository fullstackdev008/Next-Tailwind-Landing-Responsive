import React from 'react'
import Image from 'next/image'

export default function ArticleCard(props){
  const {image, description} = props;
  return (
    <div className={'article-item'}>
      <div className={'w-full flex flex-wrap'}>
        <div className={'card-img-content'}>
          <div className={'w-full card-img'}>
            <Image src={image} layout={'fill'}/>
          </div>
        </div>
      </div>
      <div className={'w-full flex-wrap card-content'}>
        <div className={'w-full flex flex-wrap card-content-wrap'}>
          <div className={'w-full flex flex-wrap card-content-background'}>
          </div>
          <p className={'article-description'}>{description}</p>
          <button className={'btn-article-see-more'}>{`MAS INFORMACIÓN`}</button>
        </div>
      </div>
    </div>
  )
}