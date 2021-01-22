import 'assets/styles/sass/style.scss'
import { useRouter } from 'next/router'
import React, { useEffect, useState, useCallback, Fragment } from 'react'
import { DefaultSeo } from 'next-seo'
import App from 'next/app'

import * as gtag from '../lib/gtag'

import Head from 'next/head'
import FacebookPixel from '../components/FacebookPixel'

import { init } from '../lib/sentry'

init()

const menus = [
  {
    title: 'FAQ',
    link: '/',
  },
  {
    title: 'BLOG',
    link: '/blog',
  },
  {
    title: 'PRICING',
    link: '/',
  },
  {
    title: 'CONTACT',
    link: '/',
  },
  {
    title: 'FUNCTIONALIDADES',
    link: '/',
  },
]

function MyApp({ Component, pageProps, err }) {
  const router = useRouter()

  const useMediaQuery = width => {
    const [targetReached, setTargetReached] = useState(false)

    const updateTarget = useCallback(e => {
      if (e.matches) {
        setTargetReached(true)
      } else {
        setTargetReached(false)
      }
    }, [])

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`)
      media.addListener(updateTarget)

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true)
      }

      return () => media.removeListener(updateTarget)
    }, [])

    return targetReached
  }

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const isBreakpoint = useMediaQuery(768)

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />

        <meta name="application-name" content="PLAYBAK Video" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PLAYBAK Video" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#ab1a19" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#ab1a19" />

        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <DefaultSeo
        title="PLAYBAK - La plataforma VOD número 1 para la monetización de vídeo en España"
        description="Únete a la plataforma de vídeo bajo demanda de rápido crecimiento. Construye tu sitio web, comercializa tu servicio VOD, lanza aplicaciones, procesa los pagos - todo en un solo lugar."
        openGraph={{
          title: 'PLAYBAK - La plataforma VOD número 1 para la monetización del vídeo en España',
          description:
            'Únete a la plataforma de vídeo bajo demanda de rápido crecimiento. Construye tu sitio web, comercializa tu servicio VOD, lanza aplicaciones, procesa los pagos - todo en un solo lugar.',
          type: 'website',
          locale: 'es-ES',
          url: router.url,
          site_name: 'PLAYBAK',
          appId: '1373304456343801',
        }}
        twitter={{
          handle: '@playbakvideo',
          site: '@playbakvideo',
          cardType: 'summary_large_image',
        }}
      />
      <FacebookPixel>
        <Component {...pageProps} err={err} menus={menus} viewport={isBreakpoint ? 'mobile' : 'desktop'} />
      </FacebookPixel>
    </Fragment>
  )
}

export default MyApp
