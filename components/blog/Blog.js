import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import ArticleItem from '../../components/blog/ArticleItem';
import DropDown from '../../commons/DropDown'
import ArticleDate from '../../commons/ArticleDate'
import BlogListItem from '../../components/blog/BlogListItem'
import BlogHeader from './BlogHeader'
import MobileBlogItem from './MobileBlogItem'
import Slider from 'react-slick/lib'
import Instruction from '../home/Instruction'


export default function Blog({viewport}){
  const router = useRouter()
  const menuItems=[
    'Steps to use',
    'Guarentee Platform',
    'Steps to use ',
    'Guarentee Platform',
    'Guarentee Platform'
  ]

  const [settings, setSettings] = useState({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  const handleClickArticle = (blogId) => {
    router.push('/blog/' + blogId)
  }

  return (
    <React.Fragment>
      {
        viewport === 'desktop' ? (
          <div className={'w-full flex flex-wrap blog-content'}>
            <BlogHeader viewport={viewport}/>

            <div className={'w-full flex flex-wrap main-body'}>
              <div className={'w-3/5 flex-wrap first-section'}>
                <p className={'w-full flex flex-wrap description-title'}>Lorem Ipsum Lorem </p>
                <p className={'w-full flex flex-wrap description-body'}>Sabemos que dirigir un negocio de streaming de vídeo puede ser un desafío, por eso, nos hemos asegurado de que tengas todo lo necesario para tener éxito. Piensa en PLAYBAK como tu propio equipo de pit-stop para tu servicio de streaming de vídeo, con alojamiento ilimitado, seguridad “top of the line” y soporte las 24 horas.</p>

                <div className={'w-full flex flex-wrap blog-item-content'}>
                  <ArticleItem title={'Catch waves with an adventure'} category={'TRAVEL'} date={'AUGUST 21 2017'} img={'/images/Article_02.png'} onClick={(blogId) => handleClickArticle(blogId)}>
                    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse luctus mattis cursus. Nam consectetur ante at nisl hendrerit gravida. Donec vehicula rhoncus mattis. Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula. Praesent nec elit non dolor consectetur tincidunt sed in felis. Donec elementum, lacus at mattis tincidunt, eros magna faucibus sem, in condimentum est augue tristique risus.'}
                  </ArticleItem>
                  <ArticleItem title={'Catch waves with an adventure'} category={'TRAVEL'} date={'AUGUST 21 2017'} img={'/images/Article_03.png'} onClick={(blogId) => handleClickArticle(blogId)}>
                    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse luctus mattis cursus. Nam consectetur ante at nisl hendrerit gravida. Donec vehicula rhoncus mattis. Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula. Praesent nec elit non dolor consectetur tincidunt sed in felis. Donec elementum, lacus at mattis tincidunt, eros magna faucibus sem, in condimentum est augue tristique risus.'}
                  </ArticleItem>
                  <ArticleItem title={'Catch waves with an adventure'} category={'TRAVEL'} date={'AUGUST 21 2017'} img={'/images/Article_04.png'} onClick={(blogId) => handleClickArticle(blogId)}>
                    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse luctus mattis cursus. Nam consectetur ante at nisl hendrerit gravida. Donec vehicula rhoncus mattis. Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula. Praesent nec elit non dolor consectetur tincidunt sed in felis. Donec elementum, lacus at mattis tincidunt, eros magna faucibus sem, in condimentum est augue tristique risus.'}
                  </ArticleItem>
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
        ) : (
          <div className={'w-full flex flex-wrap blog-content'}>
            <BlogHeader viewport={viewport}/>

            <div className={'w-full flex flex-wrap blog-detail-content'}>
              <div className={'w-full flex flex-wrap justify-center description-content'}>
                <span className={'bold italic'}>Lorem Ipsum</span>
                Sabemos que dirigir un negocio de streaming de vídeo puede ser un desafío, por eso, nos hemos asegurado de que tengas todo lo necesario para tener éxito. Piensa en PLAYBAK como tu propio equipo de pit-stop para tu servicio de streaming de vídeo, con alojamiento ilimitado, seguridad “top of the line” y soporte las 24 horas.
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
                  <DropDown title={'Filter'} menuItems={menuItems} viewport={viewport} dialog={true}/>
                </div>
              </div>

              <MobileBlogItem articleDate={'AUGUST 21 2017'} articleCategory={'TRAVEL'} blogTitle={'Catch waves with an adventure'} blogDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse luctus mattis cursus. Nam consectetur ante at nisl hendrerit gravida. Donec vehicula rhoncus mattis. Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula. Praesent nec elit non dolor consectetur tincidunt sed in felis. Donec elementum, lacus at mattis tincidunt, eros magna faucibus sem, in condimentum est augue tristique risus.'} image={'/images/help-item.png'} />
              <MobileBlogItem articleDate={'AUGUST 21 2017'} articleCategory={'TRAVEL'} blogTitle={'Catch waves with an adventure'} blogDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse luctus mattis cursus. Nam consectetur ante at nisl hendrerit gravida. Donec vehicula rhoncus mattis. Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula. Praesent nec elit non dolor consectetur tincidunt sed in felis. Donec elementum, lacus at mattis tincidunt, eros magna faucibus sem, in condimentum est augue tristique risus.'} image={'/images/help-item.png'} />
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
        )
      }
    </React.Fragment>
  )
}