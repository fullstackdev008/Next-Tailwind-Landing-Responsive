import React, {useState} from 'react'
import Slider from "react-slick";
import PriceCard from './PriceCard'

const items = [
  '5 Pixels ID*',
  '1 Custom URL',
  'Up to 1,000 shortened<br/>links / month',
  '5 Team Member',
];

export default function PricePlan({viewport}){
  const [btnPlan, setBtnPlan] = useState('monthly');
  const [settings, setSettings] = useState({
    dots: true,
    infinite: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1
  });

  const handleClickPlan = (plan) => {
    setBtnPlan(plan);
  }

  return (
    <React.Fragment>
      {viewport === 'desktop' ? (
        <div className={'w-full flex flex-wrap justify-center price-plan'}>
          <p className={'w-full flex justify-center title'}>
            {'All the plans made for you'}
          </p>
          <div className={'w-full flex flex-wrap plan-type'}>
            <button className={`btn-plan monthly ${btnPlan === "monthly" ? 'active' : ''}`} onClick={() => handleClickPlan('monthly')}>
              MONTHLY
            </button>
            <button className={`btn-plan yearly ${btnPlan === "yearly" ? 'active' : ''}`} onClick={() => handleClickPlan('yearly')}>
              YEARLY - 2 MONTH 50% DISCOUNT
            </button>
          </div>
          <div className={'w-full flex flex-wrap justify-center plan-cards-content'}>
            <PriceCard type={'normal'} title={'Starter'} price={'$10'} planUnit={'Per Month'} planItems={items} btnTitle={'BUY IT NOW'} viewport={viewport}/>
            <PriceCard type={'main'} title={'Professional'} price={'$29'} planUnit={'Per Month'} planItems={items} btnTitle={'BUY IT NOW'} viewport={viewport}/>
            <PriceCard type={'normal'} title={'Business'} price={'$49'} planUnit={'Per Month'} planItems={items} btnTitle={'CONTACT NOW'} viewport={viewport}/>
          </div>
        </div>
      ): (
        <div className={'w-full flex flex-wrap justify-center price-plan'}>
          <p className={'w-full flex justify-center title'}>
            {'All the plans made for you'}
          </p>
          <div className={'w-full flex flex-wrap plan-type'}>
            <button className={`btn-plan monthly ${btnPlan === "monthly" ? 'active' : ''}`} onClick={() => handleClickPlan('monthly')}>
              MONTHLY
            </button>
            <button className={`btn-plan yearly ${btnPlan === "yearly" ? 'active' : ''}`} onClick={() => handleClickPlan('yearly')}>
              YEARLY
            </button>
          </div>
          <div className={'w-full flex flex-wrap justify-center plan-cards-content'}>
            <Slider {...settings}>
              <PriceCard type={'normal'} title={'Starter'} price={'$10'} planUnit={'Per Month'} planItems={items} btnTitle={'BUY IT NOW'} viewport={viewport}/>
              <PriceCard type={'main'} title={'Professional'} price={'$29'} planUnit={'Per Month'} planItems={items} btnTitle={'BUY IT NOW'} viewport={viewport}/>
              <PriceCard type={'normal'} title={'Business'} price={'$49'} planUnit={'Per Month'} planItems={items} btnTitle={'CONTACT NOW'} viewport={viewport}/>
            </Slider>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}