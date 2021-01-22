import React from 'react'
import Image from 'next/dist/client/image'
import ArticleDate from '../../commons/ArticleDate'

export default function ArticleItem({img, title, category, date, children, onClick}) {
  const handleClick = (blogId) => {
    onClick(blogId)
  }

  return(
    <div className={'w-full flex flex-wrap blog-item'} onClick={() => handleClick(1)}>
      <div className={'w-2/5 flex flex-wrap image-section'}>
        <div className={'article-img-content'}>
          <div className={'w-full article-img'}>
            <Image src={img} layout={'fill'} />
          </div>
        </div>
      </div>
      <div className={'w-3/5 flex flex-wrap description-section'}>
        <p className={'w-full flex flex-wrap article-title'}>{title}</p>
        <p className={'w-full flex flex-wrap article-description'}>
          {children}
        </p>
        <ArticleDate category={category} date={date} />
      </div>
    </div>
  )
}