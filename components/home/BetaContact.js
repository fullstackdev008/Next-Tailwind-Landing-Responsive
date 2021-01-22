import React from 'react'
import Image from 'next/image'

export default function BetaContact({viewport}){
  return (
    <div className={'w-full flex flex-wrap justify-center'}>
      {viewport === 'mobile' ? (
        <React.Fragment>
          <div className={'w-full flex flex-wrap justify-center beta-contact-mobile-content'}>
            <p className={'title'}>Participa en la Beta</p>
          </div>
          <div className={'w-full flex flex-wrap justify-center beta-contact-content'}>
            <p className={'sub-title'}>Sign up to keep up-to-date </p>
            <div className={'w-full flex flex-wrap justify-center'}>
              <div className={'contact-form'}>
                <div className={'beta-diagram-img-content'}>
                  <div className={'w-full flex flex-wrap beta-diagram-img'}>
                    <Image
                      src={'/images/beta_diagram.png'}
                      layout={'fill'}
                    />
                  </div>
                </div>
                <div className={'w-full flex flex-wrap form-content'}>
                  <input placeholder={'Enter Email'} required={'email'} type={'text'}/>
                  <div className={'btn-send-content'}>
                  </div>
                  <button className={'btn-send'}>SEND</button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ): (
        <div className={'w-full flex flex-wrap justify-center beta-contact-content'}>
          <div className={'w-full'}>
            <p className={'title'}>Participa en la Beta</p>
            <p className={'sub-title'}>Sign up to keep up-to-date </p>
            <div className={'w-full flex flex-wrap justify-center'}>
              <div className={'contact-form'}>
                <div className={'beta-diagram-img-content'}>
                  <div className={'w-full flex flex-wrap beta-diagram-img'}>
                    <Image
                      src={'/images/beta_diagram.png'}
                      layout={'fill'}
                    />
                  </div>
                </div>
                <div className={'w-full flex flex-wrap form-content'}>
                  <input placeholder={'Enter Email'} required={'email'} type={'text'}/>
                  <div className={'btn-send-content'}>
                  </div>
                  <button className={'btn-send'}>SEND</button>
                </div>
                <div className={'fly-send-img-content'}>
                  <div className={'w-full flex flex-wrap fly-send-img'}>
                    <Image
                      src={'/images/fly_send.png'}
                      layout={'fill'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) }

    </div>
  )
}