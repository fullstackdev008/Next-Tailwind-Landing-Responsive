import React from 'react'
import Image from 'next/dist/client/image'
import ArticleDate from '../../commons/ArticleDate'

export default function MobileBlogItem(props){
  const {articleDate = '', articleCategory = '', blogTitle = '', blogDescription = '', image='', viewport=''} = props;
  return (
    <div className={'w-full flex flex-wrap justify-center blog-item'}>
      <div className={'w-full help-blog-img-content'}>
        <div className={'w-full flex flex-wrap help-blog-img'}>
          <Image
            src={image}
            layout={'fill'}
          />
        </div>
      </div>
      <p className={'w-full flex flex-wrap blog-title'}><span>{blogTitle}</span> </p>
      <ArticleDate category={articleCategory} date={articleDate}/>
      <p className={'w-full blog-description'}>{blogDescription}</p>
    </div>
  )
}