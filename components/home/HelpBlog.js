import React from 'react'
import Image from 'next/image'
import Collapsible from 'react-collapsible'
import { CollapseElements } from './Functionalies'

import ArticleCard from './ArticleCard'
import DropDown from '../../commons/DropDown'

const firstColmun = [
  'Visualización segura a nivel mundial',
  'Programa tus vídeo',
  'Selecciona tu modelo de negocio',
  'Pago sin fisuras',
  'Seguimiento de derechos de autor y pagos',
  'Upsells y cross-sells',
  'Personaliza con tu marca',
]

const secondColmun = [
  'Meta-Datos SEO',
  'Administra todos tus metadatos en un solo lugar',
  'Alojamiento de vídeo incorporado',
  'Crear capítulos, episodios o listas de reproducción',
  'Marca blanca, estable y confiable',
  'Una tarifa simple y predecible',
  'Una tarifa simple y predecible'
]

export default function HelpBlog({viewport}){
  const menuItems=[
    'Steps to use',
    'Guarentee Platform',
    'Steps to use ',
    'Guarentee Platform',
    'Guarentee Platform'
  ]
  return (
    <React.Fragment>
      {
        viewport === 'desktop' ? (
          <div className={'w-full flex flex-wrap help-blog-content'}>
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
                  <div className={'w-full help-blog-img-content'}>
                    <div className={'w-full flex flex-wrap help-blog-img'}>
                      <Image
                        src={'/images/blank.jpg'}
                        layout={'fill'}
                      />
                    </div>
                  </div>
                  <p className={'w-full flex flex-wrap justify-center blog-title'}>This Visionary Exhibition Explores a Post-Urban Future</p>
                  <p className={'w-full flex flex-wrap justify-center blog-description'}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse luctus mattis cursus. Nam consectetur ante at nisl hendrerit gravida. Donec vehicula rhoncus mattis. Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula. Praesent nec elit non dolor consectetur tincidunt sed in felis. Donec elementum, lacus at mattis tincidunt, eros magna faucibus sem, in condimentum est augue tristique risus.`}</p>
                </div>
              </div>
              <div className={'w-full help-second-section'}>
                <div className={'w-full flex flex-wrap justify-center'}>
                  <ArticleCard image={'/images/blank.jpg'} description={`In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.`}/>
                  <ArticleCard image={'/images/blank.jpg'} description={`In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.`}/>
                </div>
              </div>
            </div>

            <div className={'w-full flex flex-wrap help-section-4'}>
              <div className={'w-full flex flex-wrap divider'}></div>
            </div>

            <div className={'w-full flex flex-wrap grid grid-cols-2 gap-8 help-section-5'}>
              <div className={'w-full first-column'}>
                {
                  firstColmun.map((item, key) => {
                    return (
                      <Collapsible trigger={item} key={key}>
                        <CollapseElements />
                      </Collapsible>
                    )
                  })
                }
              </div>
              <div className={'w-full second-column'}>
                {
                  secondColmun.map((item, key) => {
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
        ) : (
          <div className={'w-full flex flex-wrap help-blog-content'}>
            <div className={'w-full header'}>
              <div className={`w-full flex flex-wrap title`}>
                <p>How can we help you?</p>
                <div className={'question-img-content'}>
                  <div className={'w-full flex flex-wrap question-img'}>
                    <Image
                      src={'/images/question.png'}
                      layout={'fill'}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={'w-full flex flex-wrap grid grid-cols-2 gap-8 help-section-2'}>
              <div className={`w-full flex flex-wrap  search-input-content`}>
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
              <div className={`w-full flex flex-wrap justify-end search-input-content`}>
                <DropDown title={'Filter'} menuItems={menuItems}/>
              </div>
            </div>

            <div className={'w-full flex flex-wrap help-section-3'}>
              <div className={'w-full help-first-section'}>
                <div className={'w-full flex flex-wrap justify-center'}>
                  <div className={'w-full help-blog-img-content'}>
                    <div className={'w-full flex flex-wrap help-blog-img'}>
                      <Image
                        src={'/images/help-item.png'}
                        layout={'fill'}
                      />
                    </div>
                  </div>
                  <p className={'w-full flex flex-wrap blog-description'}><span>This Visionary Exhibition Explores a Post-Urban Future</span> <br />{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse luctus mattis cursus. Nam consectetur ante at nisl hendrerit gravida. Donec vehicula rhoncus mattis. Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula. Praesent nec elit non dolor consectetur tincidunt sed in felis. Donec elementum, lacus at mattis tincidunt, eros magna faucibus sem, in condimentum est augue tristique risus.`}</p>
                </div>
              </div>
            </div>

            <div className={'w-full flex flex-wrap justify-center help-section-4'}>
              <ArticleCard image={'/images/help-item.png'} description={`In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.`}/>
            </div>

            <div className={'w-full flex flex-wrap help-section-5'}>
              <div className={'w-full first-column'}>
                {
                  firstColmun.map((item, key) => {
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
    </React.Fragment>
  )
}