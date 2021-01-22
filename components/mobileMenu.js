import React, { useState } from 'react';
import Link from 'next/dist/client/link'
import { useRouter } from 'next/router'
import Image from 'next/dist/client/image'

export default function MobileMenu(props) {
  const router = useRouter()
  const { menus, open, onClose } = props;
  return (
    <div id="menuModal" className={`modal p-3 ${open === true ? 'show' : 'hide'}`}>
      <div className="modal-content">
        <div className="w-full flex flex-wrap justify-start menu-modal-content">
          <div className={'modal-close'} onClick={onClose}><i className={'fa fa-times'}></i></div>

          <div className={'w-full flex flex-wrap menu-content'}>
            {
              menus.map((menu, key) => {
                return (
                  <div className={'w-full flex flex-wrap menu-item'}>
                    <Link href={menu.link} locale={router.locale}>
                      <a>{menu.title}
                        <svg width="7px" height="7px" viewBox="0 0 7 7" version="1.1">
                          <defs>
                            <filter id="filter-1">
                              <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.734671 0 0 0 0 0.000000 0 0 0 0 0.007510 0 0 0 1.000000 0"></feColorMatrix>
                            </filter>
                          </defs>
                          <g id="Pagina" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="UI/Icon/10px/Chevron-Right" transform="translate(-244.000000, -156.000000)" filter="url(#filter-1)">
                              <g transform="translate(244.000000, 156.000000)">
                                <rect id="bounds" x="0" y="0" width="7" height="7"></rect>
                                <path d="M2.8,7 C2.59,7 2.45,6.93 2.31,6.79 C2.03,6.51 2.03,6.09 2.31,5.81 L4.62,3.5 L2.31,1.19 C2.03,0.91 2.03,0.49 2.31,0.21 C2.59,-0.07 3.01,-0.07 3.29,0.21 L6.09,3.01 C6.37,3.29 6.37,3.71 6.09,3.99 L3.29,6.79 C3.15,6.93 3.01,7 2.8,7 Z" id="Path" fill-opacity="0.86" fill="#262626"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </a>
                    </Link>
                  </div>
                )
              })}
            }
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

        <p className={'w-full flex flex-wrap copyright'}><span className={`year`}>	&copy; 2020 Play</span><span className={'strong'}>BAK </span> &nbsp; {' All Right Reserved'}</p>
      </div>
    </div>
  )
}