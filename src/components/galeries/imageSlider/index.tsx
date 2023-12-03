import { ReactNode } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { getScreenSiteAndWidth } from '../../../helpers/screenSize';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import SwiperButtons from './swiperButtons';

interface ImageSliderInterface {
    title: string | ReactNode,
    text: string | ReactNode,
    img: string,
    imgMobile: string,
    imgAlt: string,
}

export default function ImageSlider(props: ImageSliderInterface) {

    const {title, text, img, imgMobile, imgAlt} = props

    const screenSize = getScreenSiteAndWidth()

    return (
        <section className={styles.imagesliderSection}>
            <div className={`${styles.wordsContainer}`}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{ delay: 2000 }}
                    loop
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    className={styles.swiperContainer}
                >
                    <SwiperButtons />
                    <SwiperSlide>
                        <div className={styles.imageContainer}>
                            <Image
                                className={'apearMobile'}
                                height={706}
                                width={726}
                                src={img}
                                alt={imgAlt}
                                quality={100}
                                loading={screenSize.dynamicWidth >= 992 ? 'eager' : 'lazy'}
                            />
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                className={'apearDesktop'}
                                height={300}
                                width={375}
                                src={imgMobile}
                                alt={imgAlt}
                                quality={100}
                                unoptimized={true}
                                loading={screenSize.dynamicWidth >= 992 ? 'lazy' : 'eager'}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.imageContainer}>
                            <Image
                                className={'apearMobile'}
                                height={706}
                                width={726}
                                src={img}
                                alt={imgAlt}
                                quality={100}
                                loading={screenSize.dynamicWidth >= 992 ? 'eager' : 'lazy'}
                            />
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                className={'apearDesktop'}
                                height={300}
                                width={375}
                                src={imgMobile}
                                alt={imgAlt}
                                quality={100}
                                unoptimized={true}
                                loading={screenSize.dynamicWidth >= 992 ? 'lazy' : 'eager'}
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <article className={`container ${styles.textContainer}`}>
                    <h1>{title}</h1>
                    {text}
                    <div className={styles.logosContainer}>
                        <div>
                            <Image 
                                src='/assets/images/home/pacto-global.webp' 
                                alt="Pacto Global"
                                height={44}
                                width={120}
                                quality={100}
                                unoptimized={true}
                            />
                        </div>
                        <div><img src='/assets/images/home/hospital-pequeno-principe.webp' alt="Hospital pequeno principe  " /></div>
                        <div><img src='/assets/images/home/analise-advocacia-500.webp' alt="analise advocacia 500" /></div>
                    </div>
                </article>
            </div>
        </section>
    )
}