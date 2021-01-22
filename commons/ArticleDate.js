import React from 'react'

export default function ArticleItem({category, date}) {
  return(
    <p className={'w-full flex flex-wrap article-date'}><span>{category}</span>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;{date}</p>
  )
}