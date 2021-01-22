import React from 'react'
import Image from 'next/dist/client/image'
import ArticleDate from '../../commons/ArticleDate'

export default function BlogListItem({img, category, date, children, onClick}) {
  const handleClick = (blogId) => {
    onClick(blogId)
  }

  return(
    <div className={'w-full flex blog-list-item'} onClick={() => handleClick(1)}>
      <div className={'flex blog-item-img-content'}>
        <div className={'w-full blog-item-img'}>
          <Image src={img} layout={'fill'} />
        </div>
      </div>
      <div className={'flex flex-wrap blog-item-content'}>
        <p className={'w-full flex blog-item-title'}>{children}</p>
        <ArticleDate category={category} date={date} />
      </div>
    </div>
  )
}