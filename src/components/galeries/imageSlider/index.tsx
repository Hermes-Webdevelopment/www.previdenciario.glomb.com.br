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

    const swiperRef = React.useRef<any | null>(null);

    // Função para ir para o próximo slide
    const goToNextSlide = () => {
        if (swiperRef.current) {
        swiperRef.current.slideNext();
        }
    };

    // Função para ir para o slide anterior
    const goToPrevSlide = () => {
        if (swiperRef.current) {
        swiperRef.current.slidePrev();
        }
    };

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
                </article>
            </div>
        </section>
    )
}