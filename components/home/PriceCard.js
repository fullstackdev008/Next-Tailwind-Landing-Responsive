import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import CheckCircle from '../../commons/CheckCircle'

export default function PriceCard(props){
  const {type, title, price, planUnit, planItems, btnTitle,  viewport} = props;
  return (
    <div className={`${type === 'normal' ? 'normal-item' : 'main-item'}`}>
      <p className={'title'}>{title}</p>
      <p className={'price'}>{price}</p>
      <p className={'plan-unit'}>{planUnit}</p>
      <div className={'w-full plan-items'}>
        {
          planItems.map((item, key) => {
            return (
              <p className={`item ${type === 'main' ? 'flex justify-center' : ''}`} key={key}>{type === 'main' && <CheckCircle color={'#AA1917'} viewport={viewport}/>} <span> {ReactHtmlParser(item)} </span></p>
            )
          })
        }
      </div>
      <button className={'btn-price'}>{btnTitle}</button>
    </div>
  );
}