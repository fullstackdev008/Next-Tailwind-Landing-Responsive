import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import LoginModal from '../loginModal1'
import MobileMenu from '../mobileMenu'

export default function Header({ selectedMenu, menus, viewport }) {
  const router = useRouter()

  const [open, setOpen] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  const handleCloseModal = () => {
    setOpen(!open)
  }

  const handleCloseMenuModal = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={'w-full flex header'}>
      <div className={`${viewport === 'desktop' ? '' : 'w-3/5'} flex flex-wrap items-center`}>
        {viewport === 'mobile' && (
          <button className={'hamburg-menu'} onClick={() => handleCloseMenuModal()}>
            <svg width="20px" height="16px" viewBox="0 0 20 16" version="1.1">
              <g id="Pagina" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Mobile-landing" transform="translate(-19.000000, -44.000000)" fill="#030303">
                  <g id="icon/menu" transform="translate(19.000000, 44.000000)">
                    <g id="Group-2" transform="translate(10.000000, 8.000000) scale(1, -1) translate(-10.000000, -8.000000) ">
                      <rect id="Rectangle-228" transform="translate(10.000000, 0.750000) scale(-1, -1) translate(-10.000000, -0.750000) " x="0" y="0" width="20" height="1.5" rx="0.75"></rect>
                      <rect id="Rectangle-228-Copy" transform="translate(7.000000, 7.750000) scale(-1, -1) translate(-7.000000, -7.750000) " x="0" y="7" width="14" height="1.5" rx="0.75"></rect>
                      <rect id="Rectangle-228-Copy-2" transform="translate(10.000000, 14.750000) scale(-1, -1) translate(-10.000000, -14.750000) " x="0" y="14" width="20" height="1.5" rx="0.75"></rect>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        )}
        <a href={'/'} className={'flex flex-wrap items-center'}>
          <Image src={'/images/logo.png'} alt="Logo" width={viewport === 'desktop' ? 123 : 75} height={viewport === 'desktop' ? 33 : 20} className={'logo'}/>
        </a>
      </div>
      <div className={`${viewport === 'desktop' ? 'w-full' : 'w-2/5'} flex flex-wrap justify-end`}>
        {viewport === 'desktop' && <ul className="flex flex-col lg:flex-row list-none items-center justify-end">
          {menus &&
          menus.map((menu, key) => {
            return (
              <li
                className={`flex justify-center menu-item ${selectedMenu === menu.title ? 'active' : ''}`}
                key={key}
              >
                <Link href={menu.link} locale={router.locale}>
                  <a>{menu.title}</a>
                </Link>
              </li>
            )
          })}
        </ul>}
        {
          viewport === 'desktop' ? (
            <button className={'btn-login'}>Login</button>
          ) : (
            <React.Fragment>
              <button className={'btn-bag'}>
                <span className={'badge-cnt'}>5</span>
                <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" >
                  <g id="Pagina" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Mobile-landing" transform="translate(-246.000000, -43.000000)" fill="#000000" stroke="#000000" strokeWidth="0.3">
                      <g id="icon/bag" transform="translate(247.000000, 44.000000)">
                        <path d="M11.7795718,5.0800123 C11.5710776,5.0800123 11.4025974,5.24873676 11.4025974,5.45753328 C11.4025974,7.34302913 9.87083187,8.87490663 7.99017199,8.87490663 C6.10951211,8.87490663 4.57915058,7.34232611 4.57915058,5.45753328 C4.57915058,5.24873676 4.40926641,5.0800123 4.2021762,5.0800123 C3.99368199,5.0800123 3.82379782,5.24873676 3.82379782,5.45753328 C3.82379782,7.75851312 5.69392769,9.63205765 7.99087399,9.63205765 C10.2885223,9.63205765 12.1593542,7.75921613 12.1593542,5.45753328 C12.1579502,5.24873676 11.988066,5.0800123 11.7795718,5.0800123 L11.7795718,5.0800123 Z M0.756054756,15.243552 L0.756054756,13.4585878 L15.2249912,13.4585878 L15.2249912,15.243552 L0.756054756,15.243552 L0.756054756,15.243552 Z M1.91365391,1.37861945 L1.2979993,0.77050837 L14.6963847,0.756447999 L14.0659881,1.39619491 C13.994384,1.46930884 13.956476,1.56491937 13.956476,1.66545103 C13.956476,1.76598269 13.997894,1.86159322 14.0687961,1.93189507 L14.6844507,2.54000615 L1.29168129,2.54000615 L1.91575992,1.91502263 C1.98736399,1.8419087 2.02667603,1.7477042 2.02667603,1.64576651 C2.02597403,1.54593787 1.98455598,1.44821829 1.91365391,1.37861945 L1.91365391,1.37861945 Z M0.756054756,3.29645415 L15.2249912,3.29645415 L15.2249912,12.7035458 L0.756054756,12.7035458 L0.756054756,3.29645415 L0.756054756,3.29645415 Z M15.8069498,2.58921745 L14.8676729,1.65982688 L15.8715339,0.643965025 C15.978238,0.535700163 16.009828,0.371896832 15.95086,0.231996133 C15.8918919,0.0906893976 15.7550018,0 15.6026676,0 L0.379080379,0.0147633903 C0.225342225,0.0147633903 0.087048087,0.108264862 0.0294840295,0.249571598 C-0.0280800281,0.390878334 0.00491400491,0.554681664 0.113022113,0.661540489 L1.11267111,1.64857858 L0.111618112,2.65108309 C0.047034047,2.71716684 0.0196560197,2.80223208 0.0126360126,2.89010941 C0.0112320112,2.9013577 0,2.90768487 0,2.91893317 L0,15.621073 C0,15.8298695 0.16988417,16 0.378378378,16 L15.6019656,16 C15.8104598,16 15.980344,15.8298695 15.980344,15.621073 L15.980344,2.9653324 C15.983854,2.94775693 16,2.93650863 16,2.91893317 C16,2.77762643 15.9220779,2.65389516 15.8069498,2.58921745 Z" id="Shopping-bag-4"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <button className={'btn-usericon'} onClick={() => handleCloseModal()}>
                <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" >
                  <g id="Pagina" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Mobile-landing" transform="translate(-282.000000, -44.000000)" fill="#000000">
                      <g id="usericon" transform="translate(282.000000, 44.000000)">
                        <path d="M13.1620133,9.96833823 C12.322243,9.12859804 11.3226986,8.50693973 10.2321387,8.13061975 C11.4001612,7.32614733 12.1675287,5.97979823 12.1675287,4.4574115 C12.1675287,1.99960082 10.1679279,0 7.71011719,0 C5.25230651,0 3.25270569,1.99960082 3.25270569,4.4574115 C3.25270569,5.97979823 4.02007317,7.32614733 5.18812581,8.13061975 C4.09756587,8.50693973 3.09802146,9.12859804 2.25825116,9.96833823 C0.802002776,11.4246167 0,13.3607898 0,15.4202344 L1.20470581,15.4202344 C1.20470581,11.8331325 4.12301528,8.914823 7.71011719,8.914823 C11.2972191,8.914823 14.2155286,11.8331325 14.2155286,15.4202344 L15.4202344,15.4202344 C15.4202344,13.3607898 14.6182316,11.4246167 13.1620133,9.96833823 Z M7.71011719,7.71011719 C5.91658129,7.71011719 4.4574115,6.25097751 4.4574115,4.4574115 C4.4574115,2.66384549 5.91658129,1.20470581 7.71011719,1.20470581 C9.50365308,1.20470581 10.9628229,2.66384549 10.9628229,4.4574115 C10.9628229,6.25097751 9.50365308,7.71011719 7.71011719,7.71011719 Z" id="Shape"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <LoginModal open={open} onClose={() => handleCloseModal()} />
              <MobileMenu menus={menus} open={menuOpen} onClose={() => handleCloseMenuModal()} />
            </React.Fragment>
          )
        }
      </div>
    </div>
  )
}
