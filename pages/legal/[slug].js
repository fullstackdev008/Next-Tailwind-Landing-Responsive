import React from 'react'
import axios from 'axios'

import HeadSection from '../../components/layouts/HeadSection'
import Header from '../../components/layouts/Header'
import Footer from '../../components/layouts/Footer'

export default function Legal({ menus, legalcontent }) {
  return (
    <div className={``}>
      <HeadSection />
      <main className={`main`}>
        <Header selectedMenu={'BLOG'} menus={menus} />
        <div className={'flex justify-center legal-content'}>
          <div className={'w-600'} dangerouslySetInnerHTML={{ __html: legalcontent }} />
        </div>
        <Footer />
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'privacy-policy' } },
      { params: { slug: 'cookie-policy' } },
      { params: { slug: 'condiciones-de-uso' } },
    ],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  let legalresponse = null
  if (params.slug === 'privacy-policy' || params.slug === 'condiciones-de-uso') {
    legalresponse = await axios.get(`https://www.iubenda.com/api/${params.slug}/98811979`)
  } else {
    legalresponse = await axios.get(`https://www.iubenda.com/api/privacy-policy/98811979/cookie-policy`)
  }
  return {
    props: {
      legalcontent: legalresponse.data.content,
    },
  }
}
