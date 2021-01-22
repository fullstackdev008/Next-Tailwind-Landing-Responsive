import React from 'react'
import Image from 'next/image'
import Collapsible from 'react-collapsible'
import { CollapseElements } from './Functionalies'
import DropDown from '../../commons/DropDown'

import ArticleCard from './ArticleCard'

const colmun = [
  'Visualización segura a nivel mundial',
  'Programa tus vídeo',
  'Selecciona tu modelo de negocio',
  'Pago sin fisuras',
  'Seguimiento de derechos de autor y pagos',
  'Upsells y cross-sells',
  'Personaliza con tu marca',
  'Selecciona tu modelo de negocio',
  'Pago sin fisuras',
  'Seguimiento de derechos de autor y pagos',
  'Upsells y cross-sells'
]

export default function Help(){
  const menuItems=[
    'Steps to use',
    'Guarentee Platform',
    'Steps to use ',
    'Guarentee Platform',
    'Guarentee Platform'
  ]
  return (
    <div className={'w-full flex flex-wrap help-content'}>
      <div className={'w-full grid grid-cols-2 gap-4 header'}>
        <div className={`w-full flex flex-wrap title`}>
          <p>How can <br/>{'we help you?'}</p>
          <div className={'question-img-content'}>
            <div className={'w-full flex flex-wrap question-img'}>
              <Image
                src={'/images/question.png'}
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

      <div className={'w-full flex flex-wrap grid grid-cols-2 gap-8 help-section-2'}>
        <div></div>
        <div className={'w-full flex flex-wrap justify-center second-section'}>
          <p>Top Questions</p>
          <DropDown title={'Filter'} menuItems={menuItems}/>
        </div>
      </div>

      <div className={'w-full flex flex-wrap grid grid-cols-2 gap-8 help-section-3'}>
        <div className={'w-full help-first-section'}>
          <div className={'w-full flex flex-wrap justify-center'}>
            <ArticleCard image={'/images/blank.jpg'} description={`In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.`}/>
            <ArticleCard image={'/images/blank.jpg'} description={`In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.`}/>
          </div>
        </div>
        <div className={'w-full help-second-section'}>
          {
            colmun.map((item, key) => {
              return (
                <Collapsible trigger={item} key={key}>
                  <CollapseElements />
                </Collapsible>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}