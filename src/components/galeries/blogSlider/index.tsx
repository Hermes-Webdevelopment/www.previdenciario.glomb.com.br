import { ReactNode } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import SwiperButtons from './swiperButtons';
import BlueButton from '../../atons/blueButton';
import { getScreenSiteAndWidth } from '../../../helpers/screenSize';

interface BlogSliderInterface {
    title: string | ReactNode,
    btnText: string,
    btnLink: string,
    blogPosts: BlogPosts[]
}

interface BlogPosts{
    img: string,
    imgaAlt: string,
    postTitle: string,
    postText: string,
    actionBtn:string
}

export default function BlogSlider(props: BlogSliderInterface) {

    const {title, btnText, btnLink, blogPosts} = props

    const screenSize = getScreenSiteAndWidth()

    return (
        <section className={styles.blogSliderSection}>
            <div className={`container ${styles.blogSliderContainer}`}>
                <span>{title}</span>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={screenSize.dynamicWidth >= 768 ? 3 : 1}
                    autoplay={{ delay: 2000 }}
                    loop
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    className={styles.swiperContainer}
                >
                    <SwiperButtons />
                    {
                        blogPosts.map(post => {
                            return (
                                <SwiperSlide>
                                    <div className={styles.postContainer}>
                                        <div>
                                            <Image
                                                height={250}
                                                width={392}
                                                src={post.img}
                                                alt={post.imgaAlt}
                                            />
                                            <span>
                                                {post.postTitle}
                                            </span>
                                            <span>
                                                {post.postText}
                                            </span>
                                        </div>
                                        <span>
                                            {post.actionBtn}
                                        </span>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <BlueButton 
                    buttonLink={btnLink}
                    buttonText={btnText}
                    transparentMode={true}
                />
            </div>
        </section>
    )
}