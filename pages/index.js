import React, { useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'

import HeadSection from '../components/layouts/HeadSection'
import Header from '../components/layouts/Header'
import Instruction from '../components/home/Instruction'
import Steps from '../components/home/Steps'
import BetaContact from '../components/home/BetaContact'
import PricePlan from '../components/home/PricePlan'
import Functionalies from '../components/home/Functionalies'
import CustomerSay from '../components/home/CustomerSay'
import Help from '../components/home/Help'
import HelpBlog from '../components/home/HelpBlog'
import Contact from '../components/home/Contact'
import Footer from '../components/layouts/Footer'

export default function Home({ menus, viewport }) {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  })

  return (
    <div className={``}>
      <HeadSection />
      {viewport === 'desktop' ? (
        <React.Fragment>
          <main className={`main`}>
            <div className={'w-full flex flex-wrap video_list_image justify-center'}>
              <div className={'w-full flex video_list_image_content justify-center'}>
                <Image src={'/images/video_list.png'} layout={'fill'} />
                <div className={'w-full flex flex-wrap justify-center'}>
                  <p className={'w-full flex justify-center hero-title'}>
                    Vende contenido <br />
                    online
                  </p>
                  <p className={'w-full flex justify-center hero-description'}>TU PLATAFORMA TODO EN 1</p>
                </div>
              </div>
              <div className={'web-instruction'}>
                <div className={'w-full grid grid-cols-4 gap-4'}>
                  <Instruction
                    align={'left'}
                    imageWidth={40}
                    imageHeight={34}
                    icon={'/images/seguridad.png'}
                    title={'Seguridad Garantizada'}
                    index={1}
                    viewport={viewport}
                  >
                    {'Protege tus vídeos, datos personales y tus pagos. '}
                    <br />
                    {'Asegura la privacidad de tu marca y tus finanzas. '}
                  </Instruction>
                  <Instruction
                    align={'center'}
                    imageWidth={40}
                    imageHeight={34}
                    icon={'/images/cms.png'}
                    title={'CMS de Video'}
                    index={2}
                    viewport={viewport}
                  >
                    {'Organiza el contenido por categorías, añade etiquetas , filtros y ordena el material a tu gusto.'}
                  </Instruction>
                  <Instruction
                    align={'center'}
                    imageWidth={40}
                    imageHeight={34}
                    icon={'/images/seo.png'}
                    title={'SEO on Page'}
                    index={3}
                    viewport={viewport}
                  >
                    {'Posiciona tu marca en buscadores y consigue el maximo rendimiento de las herramientas.'}
                  </Instruction>
                  <Instruction
                    align={'right'}
                    imageWidth={40}
                    imageHeight={34}
                    icon={'/images/analytics.png'}
                    title={'Analytics'}
                    index={4}
                    viewport={viewport}
                  >
                    {'Conoce cómo se involucran tus usuarios con tu contenido y gestiona tu comunidad.'}
                  </Instruction>
                </div>
              </div>
            </div>
            <Header selectedMenu={'PRICING'} menus={menus} viewport={viewport} />
            <Steps viewport={viewport} />
            <BetaContact viewport={viewport} />
            <PricePlan viewport={viewport} />
            <Functionalies viewport={viewport} />
            <div className={'w-full flex flex-wrap justify-center'}>
              <div className={'progress-img-content'}>
                <div className={'w-full flex flex-wrap progress-img'}>
                  <Image src={'/images/progress.png'} layout={'fill'} />
                </div>
              </div>
            </div>
            <CustomerSay viewport={viewport} />
            <Help />
            <HelpBlog viewport={viewport} />
            <Contact viewport={viewport} />
          </main>
          <Footer viewport={viewport} />
        </React.Fragment>
      ) : (
        <div className={'mobile'}>
          <main className={`main`}>
            <div className={'w-full flex flex-wrap video_list_image justify-center'}>
              <div className={'w-full flex video_list_image_content justify-center'}>
                <Image src={'/images/video_list.png'} layout={'fill'} />
                <div className={'w-full flex flex-wrap justify-center'}>
                  <p className={'w-full flex justify-center hero-title'}>Vende contenido online</p>
                  <p className={'w-full flex justify-center hero-description'}>
                    TU PLATAFORMA <br />
                    TODO EN 1
                  </p>
                </div>
              </div>
              <div className={'web-instruction'}>
                <Slider {...settings}>
                  <Instruction
                    align={'left'}
                    imageWidth={40}
                    imageHeight={34}
                    icon={'/images/seguridad.png'}
                    title={'Seguridad Garantizada'}
                    index={1}
                    viewport={viewport}
                  >
                    {'Protege tus vídeos, datos personales y tus pagos. '}
                    {'Asegura la privacidad de tu marca y tus finanzas. '}
                  </Instruction>
                  <Instruction
                    align={'center'}
                    imageWidth={40}
                    imageHeight={34}
                    icon={'/images/cms.png'}
                    title={'CMS de Video'}
                    index={2}
                    viewport={viewport}
                  >
                    {'Organiza el contenido por categorías, añade etiquetas , filtros y ordena el material a tu gusto.'}
                  </Instruction>
                  <Instruction
                    align={'center'}
                    imageWidth={40}
                    imageHeight={34}
                    icon={'/images/seo.png'}
                    title={'SEO on Page'}
                    index={3}
                    viewport={viewport}
                  >
                    {'Posiciona tu marca en buscadores y consigue el maximo rendimiento de las herramientas.'}
                  </Instruction>
                  <Instruction
                    align={'right'}
                    imageWidth={40}
                    imageHeight={34}
                    icon={'/images/analytics.png'}
                    title={'Analytics'}
                    index={4}
                    viewport={viewport}
                  >
                    {'Conoce cómo se involucran tus usuarios con tu contenido y gestiona tu comunidad.'}
                  </Instruction>
                </Slider>
              </div>
            </div>
            <Header selectedMenu={'PRICING'} menus={menus} viewport={viewport} />
            <Steps viewport={viewport} />
            <BetaContact viewport={viewport} />
            <PricePlan viewport={viewport} />
            <Functionalies viewport={viewport} />
            <CustomerSay viewport={viewport} />
            <HelpBlog viewport={viewport} />
            <Contact viewport={viewport} />
          </main>
          <Footer viewport={viewport} />
        </div>
      )}
    </div>
  )
}
