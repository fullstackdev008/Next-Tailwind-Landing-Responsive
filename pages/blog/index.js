import React, { Fragment } from 'react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import HeadSection from '../../components/layouts/HeadSection'
import Header from '../../components/layouts/Header'
import Blog from '../../components/blog/Blog'

export default function BlogPage({ menus, viewport }) {
  const router = useRouter()

  return (
    <Fragment>
      <NextSeo
        title="Estrategias y perspectivas de negocio de vídeo | Blog de PLAYBAK"
        description="Los mejores consejos, actualizaciones e inspiración del equipo de PLAYBAK para ayudarte a crear, lanzar y hacer crecer tu negocio de vídeo bajo demanda."
        openGraph={{
          title: 'Estrategias y perspectivas de negocio de vídeo | Blog de PLAYBAK',
          description:
            'Los mejores consejos, actualizaciones e inspiración del equipo de PLAYBAK para ayudarte a crear, lanzar y hacer crecer tu negocio de vídeo bajo demanda.',
          url: router.url,
        }}
      />
      <div className={``}>
        <HeadSection />
        {
          viewport === 'desktop' ? (
            <main className={`main`}>
              <Blog viewport={viewport}/>
              <Header selectedMenu={'BLOG'} menus={menus} viewport={viewport}/>
            </main>
          ): (
            <div className={'mobile'}>
              <main className={`main`}>
                <Blog viewport={viewport}/>
                <Header selectedMenu={'BLOG'} menus={menus} viewport={viewport}/>
              </main>
            </div>
          )
        }
      </div>
    </Fragment>
  )
}
