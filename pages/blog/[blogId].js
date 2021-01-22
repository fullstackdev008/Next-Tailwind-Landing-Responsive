import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import HeadSection from '../../components/layouts/HeadSection'
import Header from '../../components/layouts/Header'
import BlogHeader from '../../components/blog/BlogHeader'
import Image from 'next/dist/client/image'
import DropDown from '../../commons/DropDown'
import ArticleDate from '../../commons/ArticleDate'
import BlogListItem from '../../components/blog/BlogListItem'
import LoginModal from '../../components/loginModal'
import MobileBlogItem from '../../components/blog/MobileBlogItem'
import Slider from 'react-slick/lib'

export default function BlogDetail({menus, viewport}) {
  const router = useRouter()
  const { blogId } = router.query

  const [open, setOpen] = React.useState(false)

  const [settings, setSettings] = useState({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  const menuItems=[
    'Steps to use',
    'Guarentee Platform',
    'Steps to use ',
    'Guarentee Platform',
    'Guarentee Platform'
  ]

  const handleClickArticle = (blogId) => {
    router.push('/blog/' + blogId)
  }

  const handleCloseModal = () => {
    setOpen(!open)
  }

  return (
    <div className={``}>
      <HeadSection/>
      {
        viewport === 'desktop' ? (
          <main className={`main`}>
            <div className={'w-full flex flex-wrap blog-content'}>
              <BlogHeader viewport={viewport}/>

              <div className={'w-full flex flex-wrap main-body'}>
                <div className={'w-3/5 flex-wrap first-section'}>
                  <div className={'w-full flex back-btn-content'}>
                    <div className={'flex left-btn-img-content'}>
                      <div className={'w-full left-btn-img'}>
                        <Image src={'/images/left_arrow.png'} layout={'fill'} />
                      </div>
                    </div>
                    <Link href={'/blog'} locale={router.locale}>
                      <a className={'flex back-btn'}>BACK</a>
                    </Link>
                  </div>

                  <div className={'w-full flex-wrap blog-beta-header'} onClick={handleCloseModal}>
                    <div className={'img-content'}>
                      <div className={'w-full beta-img'}>
                        <Image src={'/images/beta_diagram.png'} layout={'fill'} />
                      </div>
                    </div>
                    <p className={'w-full title'}>Participa en la Beta</p>
                    <p className={'w-full flex justify-end sub-title'}>Pulsa y descubre todas las posibilidades
                      <div className={'flex right-btn-img-content'}>
                        <div className={'w-full right-btn-img'}>
                          <Image src={'/images/right_arrow.png'} layout={'fill'} />
                        </div>
                      </div>
                    </p>
                  </div>

                  <LoginModal open={open} onClose={() => handleCloseModal()} />

                  <div className={'w-full flex-wrap blog-detail-content'}>
                    <div className={'w-full flex flex-wrap'}>
                      <div className={'blog-detail-img-content'}>
                        <div className={'w-full blog-detail-img'}>
                          <Image src={'/images/blogItem.png'} layout={'fill'} />
                        </div>
                      </div>
                    </div>
                    <p className={'w-full flex flex-wrap blog-detail-title'}>This Visionary Exhibition Explores a Post-Urban Future</p>
                    <ArticleDate category={'TRAVEL'} date={'AUGUST 21 2017'} />
                    <p className={'w-full flex flex-wrap blog-detail-description'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse luctus mattis cursus. Nam consectetur ante at nisl hendrerit gravida. Donec vehicula rhoncus mattis. Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula. Praesent nec elit non dolor consectetur tincidunt sed in felis. Donec elementum, lacus at mattis tincidunt, eros magna faucibus sem, in condimentum est augue tristique risus.</p>
                  </div>
                </div>

                <div className={'w-2/5 flex-wrap second-section'}>
                  <DropDown title={'Filter'} menuItems={menuItems}/>
                  <p className={'w-full top-post'}>TOP Posts</p>
                  <div className={'w-full flex flex-wrap intro-content'}>
                    <div className={'intro-img-content'}>
                      <div className={'w-full intro-img'}>
                        <Image src={'/images/Article_02.png'} layout={'fill'}/>
                      </div>
                    </div>
                    <p className={'w-full flex flex-wrap intro-title'}>This Visionary Exhibition Explores a Post-Urban Future</p>
                    <ArticleDate category={'DESIGN'} date={'AUGUST 21 2017'} />
                  </div>

                  <div className={'w-full flex flex-wrap divider'}></div>

                  <div className={'w-full flex flex-wrap blog-list-content'}>
                    <BlogListItem img={'/images/SubArticle.png'} category={'DESIGN'} date={'AUGUST 21 2017'} onClick={(blogId) => handleClickArticle(blogId)}>The Most Beautiful<br/>Highways for Trips </BlogListItem>
                    <BlogListItem img={'/images/SubArticle.png'} category={'DESIGN'} date={'AUGUST 21 2017'} onClick={(blogId) => handleClickArticle(blogId)}>The Most Beautiful<br/>Highways for Trips </BlogListItem>
                    <BlogListItem img={'/images/SubArticle.png'} category={'DESIGN'} date={'AUGUST 21 2017'} onClick={(blogId) => handleClickArticle(blogId)}>The Most Beautiful<br/>Highways for Trips </BlogListItem>
                    <BlogListItem img={'/images/SubArticle.png'} category={'DESIGN'} date={'AUGUST 21 2017'} onClick={(blogId) => handleClickArticle(blogId)}>The Most Beautiful<br/>Highways for Trips </BlogListItem>

                    <div className={'w-full flex justify-end load-more-content'}>
                      <div className={'flex arrow-img-content'}>
                        <div className={'w-full arrow-img'}>
                          <Image src={'/images/Arrow.png'} layout={'fill'} />
                        </div>
                      </div>
                      <button className={'flex load-more-btn'}>
                        <span>LOAD MORE</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <Header selectedMenu={'BLOG'} menus={menus} viewport={viewport}/>
          </main>
        ) : (
          <div className={'mobile'}>
            <main className={`main`}>
              <div className={'w-full flex flex-wrap blog-content detail'}>
                <BlogHeader viewport={viewport}/>

                <div className={'w-full flex back-btn-content'}>
                  <div className={'flex left-btn-img-content'}>
                    <div className={'w-full left-btn-img'}>
                      <Image src={'/images/left-arrow.png'} layout={'fill'} />
                    </div>
                  </div>
                  <Link href={'/blog'} locale={router.locale}>
                    <a className={'flex back-btn'}>BACK</a>
                  </Link>
                </div>

                <div className={'w-full flex flex-wrap newsletter-content'}>
                  <p className={'w-full flex justify-center news-title'}>Participa en la Beta</p>
                  <p className={'w-full flex justify-center news-sub-title'}>Pulsa y descubre todas las posibilidades</p>
                </div>

                <div className={'w-full flex flex-wrap blog-detail-content'}>
                  <div className={'w-full flex flex-wrap help-section-2'}>
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
                  </div>

                  <MobileBlogItem articleDate={'AUGUST 21 2017'} articleCategory={'TRAVEL'} blogTitle={'Catch waves with an adventure'} blogDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse luctus mattis cursus. Nam consectetur ante at nisl hendrerit gravida. Donec vehicula rhoncus mattis. Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula. Praesent nec elit non dolor consectetur tincidunt sed in felis. Donec elementum, lacus at mattis tincidunt, eros magna faucibus sem, in condimentum est augue tristique risus.'} image={'/images/help-item.png'} />

                  <p className={'w-full top-post'}>TOP Posts</p>

                  <div className={'w-full flex flex-wrap post-item-slider-content'}>
                    <Slider {...settings}>
                      <div className={'w-full flex flex-wrap post-item-slider'} >
                        <div className={'w-full flex flex-wrap justify-center'} >
                          <div className={'post-item-img-content'}>
                            <div className={'w-full post-item-img'}>
                              <Image src={'/images/post-item.png'} layout={'fill'} />
                            </div>
                          </div>
                        </div>
                        <p className={'w-full flex flex-wrap post-item-title'}>Catch waves with an adventure</p>
                      </div>

                      <div className={'w-full flex flex-wrap post-item-slider'} >
                        <div className={'w-full flex flex-wrap justify-center'} >
                          <div className={'post-item-img-content'}>
                            <div className={'w-full post-item-img'}>
                              <Image src={'/images/post-item.png'} layout={'fill'} />
                            </div>
                          </div>
                        </div>
                        <p className={'w-full flex flex-wrap post-item-title'}>Catch waves with an adventure</p>
                      </div>

                      <div className={'w-full flex flex-wrap post-item-slider'} >
                        <div className={'w-full flex flex-wrap justify-center'} >
                          <div className={'post-item-img-content'}>
                            <div className={'w-full post-item-img'}>
                              <Image src={'/images/post-item.png'} layout={'fill'} />
                            </div>
                          </div>
                        </div>
                        <p className={'w-full flex flex-wrap post-item-title'}>Catch waves with an adventure</p>
                      </div>

                      <div className={'w-full flex flex-wrap post-item-slider'} >
                        <div className={'w-full flex flex-wrap justify-center'} >
                          <div className={'post-item-img-content'}>
                            <div className={'w-full post-item-img'}>
                              <Image src={'/images/post-item.png'} layout={'fill'} />
                            </div>
                          </div>
                        </div>
                        <p className={'w-full flex flex-wrap post-item-title'}>Catch waves with an adventure</p>
                      </div>

                      <div className={'w-full flex flex-wrap post-item-slider'} >
                        <div className={'w-full flex flex-wrap justify-center'} >
                          <div className={'post-item-img-content'}>
                            <div className={'w-full post-item-img'}>
                              <Image src={'/images/post-item.png'} layout={'fill'} />
                            </div>
                          </div>
                        </div>
                        <p className={'w-full flex flex-wrap post-item-title'}>Catch waves with an adventure</p>
                      </div>
                    </Slider>
                  </div>

                  <div className={'w-full flex justify-end load-more-content'}>
                    <button className={'flex load-more-btn'}>
                      <div className={'flex arrow-img-content'}>
                        <div className={'w-full arrow-img'}>
                          <Image src={'/images/Arrow.png'} layout={'fill'} />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <Header selectedMenu={'BLOG'} menus={menus} viewport={viewport}/>
            </main>
          </div>
        )
      }
    </div>
  )
}