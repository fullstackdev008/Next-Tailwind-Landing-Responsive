import React from 'react'
import Image from 'next/image'
import Link from 'next/dist/client/link'

const menus = [
  'FAQ',
  'Pricing',
  'Testimonials',
  'Contact'
]

export default function Footer({viewport}) {
  return (
    <React.Fragment>
      {viewport === 'desktop' ? (
        <footer className={`w-full flex flex-wrap justify-center footer`}>
          <p className={'w-full flex flex-wrap copyright justify-center'}><span className={`year`}>	&copy; 2020 Play</span><span className={'strong'}>BAK </span> &nbsp; {' All Right Reserved'}</p>
          <ul className="w-full flex-wrap flex flex-col lg:flex-row list-none items-center justify-center footer-menu">
            {
              menus && menus.map((menu, key) => {
                return (
                  <li className={`flex justify-center menu-item`} key={key}>
                    {/*<Link href="/" locale={router.locale}>*/}
                    <a>{menu}</a>
                    {/*</Link>*/}
                  </li>
                )
              })
            }
          </ul>
        </footer>
      ) : (
        <footer className={`w-full flex flex-wrap justify-center footer`}>
          <div className={'w-full grid grid-cols-3 gap-4 social-icons-content'}>
            <div className={'w-full flex flex-wrap justify-end'}>
              <div className={'social-item'}>
                <div className={'icon-facebook'}>
                  <Image
                  src={'/images/facebook.png'}
                  layout={'fill'}
                  />
                </div>
              </div>
            </div>

            <div className={'w-full flex flex-wrap justify-center'}>
              <div className={'social-item'}>
                <div className={'icon-twitter'}>
                  <Image
                    src={'/images/twitter.png'}
                    layout={'fill'}
                  />
                </div>
              </div>
            </div>

            <div className={'w-full flex flex-wrap'}>
              <div className={'social-item'}>
                <div className={'icon-instagram'}>
                  <Image
                    src={'/images/instagram.png'}
                    layout={'fill'}
                  />
                </div>
              </div>
            </div>
          </div>
          <p className={'w-full flex flex-wrap copyright justify-center'}><span className={`year`}>	&copy; 2020 Play</span><span className={'strong'}>BAK </span> &nbsp; {' All Right Reserved'}</p>
        </footer>
      )}
    </React.Fragment>
  )
}
