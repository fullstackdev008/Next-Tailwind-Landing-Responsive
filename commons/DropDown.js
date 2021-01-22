import React from 'react'

export default function DropDown(props){
  const {title, menuItems, viewport = '',dialog = false} = props;
  const [clicked, setClicked] = React.useState(false)

  const filters = [
    'Reciente',
    'Mas relevantes',
    'Tags',
    'Categorias'
  ]

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <React.Fragment>
      {
        dialog === false && (
          <div className="custom-dropdown">

            <div className="dropdown inline-block relative">
              <button className={`flex bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center ${clicked === true ? 'active' : ''}`} onClick={() => handleClick()}>
                <span className="mr-1">{title}</span>
                {viewport === 'mobile' && (
                  <svg width="10px" height="11px" viewBox="0 0 10 11" version="1.1">
                    <defs>
                      <filter id="filter-1">
                        <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.666667 0 0 0 0 0.098039 0 0 0 0 0.090196 0 0 0 1.000000 0"></feColorMatrix>
                      </filter>
                    </defs>
                    <g id="Pagina" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Mobile-blog" transform="translate(-257.000000, -304.000000)">
                        <g id="noun_filters_220951" transform="translate(257.000000, 304.000000)" filter="url(#filter-1)">
                          <g transform="translate(0.000000, 0.000000)">
                            <g id="Group" transform="translate(0.000000, 0.208333)" fill="#222222" fill-rule="nonzero">
                              <path d="M9.67857143,4.68292683 L6.28571429,4.68292683 C6.1547619,4.06097561 5.60714286,3.59756098 4.96428571,3.59756098 C4.32142857,3.59756098 3.77380952,4.06097561 3.64285714,4.68292683 L0.333333333,4.68292683 C0.166666667,4.68292683 0.0357142857,4.81707317 0.0357142857,4.98780488 C0.0357142857,5.15853659 0.166666667,5.29268293 0.333333333,5.29268293 L3.64285714,5.29268293 C3.77380952,5.91463415 4.32142857,6.37804878 4.96428571,6.37804878 C5.60714286,6.37804878 6.1547619,5.91463415 6.28571429,5.29268293 L9.67857143,5.29268293 C9.8452381,5.29268293 9.97619048,5.15853659 9.97619048,4.98780488 C9.97619048,4.82926829 9.83333333,4.68292683 9.67857143,4.68292683 Z M4.96428571,5.76829268 C4.54761905,5.76829268 4.20238095,5.41463415 4.20238095,4.98780488 C4.20238095,4.56097561 4.54761905,4.20731707 4.96428571,4.20731707 C5.38095238,4.20731707 5.72619048,4.56097561 5.72619048,4.98780488 C5.72619048,5.41463415 5.38095238,5.76829268 4.96428571,5.76829268 Z" id="Shape"></path>
                              <path d="M1.4047619,2.85365854 C2.04761905,2.85365854 2.5952381,2.3902439 2.72619048,1.76829268 L9.66666667,1.76829268 C9.83333333,1.76829268 9.96428571,1.63414634 9.96428571,1.46341463 C9.96428571,1.29268293 9.83333333,1.15853659 9.66666667,1.15853659 L2.72619048,1.15853659 C2.5952381,0.536585366 2.04761905,0.0731707317 1.4047619,0.0731707317 C0.654761905,0.0731707317 0.0476190476,0.707317073 0.0476190476,1.46341463 C0.0476190476,2.2195122 0.654761905,2.85365854 1.4047619,2.85365854 Z M1.4047619,0.682926829 C1.82142857,0.682926829 2.16666667,1.03658537 2.16666667,1.46341463 C2.16666667,1.8902439 1.82142857,2.24390244 1.4047619,2.24390244 C0.988095238,2.24390244 0.642857143,1.8902439 0.642857143,1.46341463 C0.642857143,1.03658537 0.988095238,0.682926829 1.4047619,0.682926829 Z" id="Shape"></path>
                              <path d="M8.60714286,7.14634146 C7.96428571,7.14634146 7.42857143,7.6097561 7.28571429,8.2195122 L0.333333333,8.2195122 C0.166666667,8.2195122 0.0357142857,8.35365854 0.0357142857,8.52439024 C0.0357142857,8.69512195 0.166666667,8.82926829 0.333333333,8.82926829 L7.28571429,8.82926829 C7.41666667,9.45121951 7.96428571,9.92682927 8.60714286,9.92682927 C9.35714286,9.92682927 9.96428571,9.30487805 9.96428571,8.53658537 C9.96428571,7.76829268 9.3452381,7.14634146 8.60714286,7.14634146 Z M8.60714286,9.30487805 C8.19047619,9.30487805 7.8452381,8.95121951 7.8452381,8.52439024 C7.8452381,8.09756098 8.19047619,7.74390244 8.60714286,7.74390244 C9.02380952,7.74390244 9.36904762,8.09756098 9.36904762,8.52439024 C9.36904762,8.95121951 9.02380952,9.30487805 8.60714286,9.30487805 Z" id="Shape"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                )}
                {
                  viewport !== 'mobile' && (
                    <svg className="fill-current h-4 w-4 red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={{fill: '#AA1917'}}>
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  )
                }
              </button>
              <ul className={`dropdown-menu absolute text-gray-700 ${clicked === true ? 'show' : 'hide'}`}>
                {
                  menuItems.map((menu, key) => {
                    return (
                      <li className="" key={key}><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#" onClick={() => handleClick}>{menu}</a></li>
                    )
                  })
                }
              </ul>
            </div>

          </div>
        )
      }
      {
        dialog && viewport == "mobile" && (
          <div className="custom-dropdown">

            <div className="dropdown inline-block relative">
              <button className={`flex bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center ${clicked === true ? 'active' : ''}`} onClick={() => handleClick()}>
                <span className="mr-1">{title}</span>
                {viewport === 'mobile' && (
                  <svg width="10px" height="11px" viewBox="0 0 10 11" version="1.1">
                    <defs>
                      <filter id="filter-1">
                        <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.666667 0 0 0 0 0.098039 0 0 0 0 0.090196 0 0 0 1.000000 0"></feColorMatrix>
                      </filter>
                    </defs>
                    <g id="Pagina" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Mobile-blog" transform="translate(-257.000000, -304.000000)">
                        <g id="noun_filters_220951" transform="translate(257.000000, 304.000000)" filter="url(#filter-1)">
                          <g transform="translate(0.000000, 0.000000)">
                            <g id="Group" transform="translate(0.000000, 0.208333)" fill="#222222" fill-rule="nonzero">
                              <path d="M9.67857143,4.68292683 L6.28571429,4.68292683 C6.1547619,4.06097561 5.60714286,3.59756098 4.96428571,3.59756098 C4.32142857,3.59756098 3.77380952,4.06097561 3.64285714,4.68292683 L0.333333333,4.68292683 C0.166666667,4.68292683 0.0357142857,4.81707317 0.0357142857,4.98780488 C0.0357142857,5.15853659 0.166666667,5.29268293 0.333333333,5.29268293 L3.64285714,5.29268293 C3.77380952,5.91463415 4.32142857,6.37804878 4.96428571,6.37804878 C5.60714286,6.37804878 6.1547619,5.91463415 6.28571429,5.29268293 L9.67857143,5.29268293 C9.8452381,5.29268293 9.97619048,5.15853659 9.97619048,4.98780488 C9.97619048,4.82926829 9.83333333,4.68292683 9.67857143,4.68292683 Z M4.96428571,5.76829268 C4.54761905,5.76829268 4.20238095,5.41463415 4.20238095,4.98780488 C4.20238095,4.56097561 4.54761905,4.20731707 4.96428571,4.20731707 C5.38095238,4.20731707 5.72619048,4.56097561 5.72619048,4.98780488 C5.72619048,5.41463415 5.38095238,5.76829268 4.96428571,5.76829268 Z" id="Shape"></path>
                              <path d="M1.4047619,2.85365854 C2.04761905,2.85365854 2.5952381,2.3902439 2.72619048,1.76829268 L9.66666667,1.76829268 C9.83333333,1.76829268 9.96428571,1.63414634 9.96428571,1.46341463 C9.96428571,1.29268293 9.83333333,1.15853659 9.66666667,1.15853659 L2.72619048,1.15853659 C2.5952381,0.536585366 2.04761905,0.0731707317 1.4047619,0.0731707317 C0.654761905,0.0731707317 0.0476190476,0.707317073 0.0476190476,1.46341463 C0.0476190476,2.2195122 0.654761905,2.85365854 1.4047619,2.85365854 Z M1.4047619,0.682926829 C1.82142857,0.682926829 2.16666667,1.03658537 2.16666667,1.46341463 C2.16666667,1.8902439 1.82142857,2.24390244 1.4047619,2.24390244 C0.988095238,2.24390244 0.642857143,1.8902439 0.642857143,1.46341463 C0.642857143,1.03658537 0.988095238,0.682926829 1.4047619,0.682926829 Z" id="Shape"></path>
                              <path d="M8.60714286,7.14634146 C7.96428571,7.14634146 7.42857143,7.6097561 7.28571429,8.2195122 L0.333333333,8.2195122 C0.166666667,8.2195122 0.0357142857,8.35365854 0.0357142857,8.52439024 C0.0357142857,8.69512195 0.166666667,8.82926829 0.333333333,8.82926829 L7.28571429,8.82926829 C7.41666667,9.45121951 7.96428571,9.92682927 8.60714286,9.92682927 C9.35714286,9.92682927 9.96428571,9.30487805 9.96428571,8.53658537 C9.96428571,7.76829268 9.3452381,7.14634146 8.60714286,7.14634146 Z M8.60714286,9.30487805 C8.19047619,9.30487805 7.8452381,8.95121951 7.8452381,8.52439024 C7.8452381,8.09756098 8.19047619,7.74390244 8.60714286,7.74390244 C9.02380952,7.74390244 9.36904762,8.09756098 9.36904762,8.52439024 C9.36904762,8.95121951 9.02380952,9.30487805 8.60714286,9.30487805 Z" id="Shape"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                )}
                {
                  viewport != 'mobile' && (
                    <svg className="fill-current h-4 w-4 red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={{fill: '#AA1917'}}>
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  )
                }
              </button>
              <div id="filterModal" className={`modal p-3 ${clicked === true ? 'show' : 'hide'}`}>
                <div className="modal-content">
                  <div className="w-full flex flex-wrap justify-start filter-modal-content">
                    <div className={'modal-close'} onClick={handleClick}><i className={'fa fa-times'}></i></div>
                    <div className={'w-full flex flex-wrap filter-content'}>
                      <p className={'w-full flex flex-wrap filter-title'}>Filtros</p>
                      <div className={'w-full flex flex-wrap divider-line'}></div>
                      <div className={'w-full flex flex-wrap filter-item-content'}>
                        <div className={'w-full flex flex-wrap filter-item'}>
                          {
                            filters.map(filter => {
                              return (
                                <a>{filter}</a>
                              )
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )
      }
    </React.Fragment>
  )
}