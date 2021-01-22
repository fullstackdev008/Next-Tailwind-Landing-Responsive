import React from 'react'
import Image from 'next/dist/client/image'

export default function BlogHeader({viewport}){
  return (
    <React.Fragment>
      {
        viewport === 'desktop' ? (
          <div className={'w-full grid grid-cols-2 gap-4 header'}>
            <div className={`w-full flex flex-wrap title`}>
              <p>Blog</p>
              <div className={'blog-img-content'}>
                <div className={'w-full flex flex-wrap blog-img'}>
                  <Image
                    src={'/images/blog.png'}
                    layout={'fill'}
                  />
                </div>
              </div>
            </div>
            <div className={`w-full flex flex-wrap justify-center search-input-content`}>
              <div className={'search-input-group'}>
                <div className={'search-img-content'}>
                  <div className={'w-full flex flex-wrap search-img'}>
                    <Image
                      src={'/images/search.png'}
                      layout={'fill'}
                    />
                  </div>
                </div>
                <input placeholder={'Search for'} type={'text'} />
              </div>
            </div>
          </div>
        ) : (
          <div className={`w-full flex flex-wrap header`}>
            <div className={`w-full flex flex-wrap title`}>
              <p>Blog</p>
              <div className={'blog-img-content'}>
                <div className={'w-full flex flex-wrap blog-img'}>
                  <Image
                    src={'/images/blog.png'}
                    layout={'fill'}
                  />
                </div>
              </div>
            </div>
          </div>
        )
      }
    </React.Fragment>
  )
}