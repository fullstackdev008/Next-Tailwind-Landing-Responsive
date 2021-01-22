import React from 'react'
import Image from 'next/image'

export default function Instruction({align, icon, imageWidth, imageHeight, title, children, index, viewport}) {
  return (
    <div className={`w-full item ${viewport === 'mobile' ? 'flex flex-wrap justify-center' : ''} ${viewport === 'desktop' ? "index-" + index : ''}`}>
      <div className={`w-full flex flex-wrap ${viewport === 'mobile' ? 'justify-center' : ''} ${align === 'center' ? 'justify-center' : (align === 'left' ? '' : 'justify-end')}`}>
        <div className={`w-full flex flex-wrap logo`}>
          <Image
            src={icon}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      </div>
      <p className={`title ${align === 'center' ? 'text-center' : (align === 'left' ? '' : 'text-right')}`}>{title}</p>
      <div className={`w-full flex flex-wrap ${viewport === 'mobile' ? 'justify-center' : ''} underline-shape ${align === 'center' ? 'justify-center' : (align === 'left' ? '' : 'justify-end')}`}>
        <span></span>
      </div>
      <div className={`flex ${align === 'center' ? 'justify-center' : (align === 'left' ? '' : 'justify-end')}`}>
        <label className={`description ${align === 'center' || align === 'left'  ? '' : 'text-right'}`}>
          {children}
        </label>
      </div>
    </div>
  )
}