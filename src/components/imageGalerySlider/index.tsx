import styles from './styles.module.scss';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ReactNode } from 'react';
import SwiperButtons from './swiperButtons';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';

interface imageGalerySliderInterface {
    title: ReactNode | string;
    subTitle: string[] ;
    carrouselImages: {
        imageUrl: string;
        imageDescription: string;
    }[];
    initialSlideNumber: number;
}

interface imageInterface {
        imageUrl: string;
        imageDescription: string;
    }[]

export default function ImageGalerySlider(props: imageGalerySliderInterface) {

    const {title, subTitle, carrouselImages, initialSlideNumber} = props

    const [screenSize, getDimension] = useState({
        dynamicWidth: 0,
        dynamicHeight: 0
      });

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    useEffect(() => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', setDimension);
    
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])
    
    return (
        <section className={styles.imageGalerySliderSection}>
            <div className={`container ${styles.sliderContainer}`}>
                <h2>{title}</h2>
                <div className={styles.subText}>
                    {
                        subTitle.map((eachTitle: ReactNode | string) => {
                            return <h3 key={Math.random()}>{eachTitle}</h3>
                        })
                    }
                </div>
                <div className={styles.swiperContainerMobile}>

                    <Swiper
                        slidesPerView={screenSize.dynamicWidth >= 768 ? 5 : 1} 
                        className="mySwiper"
                        centeredSlides={true}
                        loop={screenSize.dynamicWidth <= 768}
                        spaceBetween={screenSize.dynamicWidth >= 768 ? 30 : 10}
                        initialSlide={initialSlideNumber}
                        cssMode={screenSize.dynamicWidth >= 769}
                        navigation={screenSize.dynamicWidth <= 768}
                        pagination={screenSize.dynamicWidth <= 768}
                        mousewheel={screenSize.dynamicWidth <= 768}
                        keyboard={screenSize.dynamicWidth <= 768}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    >
                        <SwiperButtons />
                        
                        {
                            carrouselImages.map((image: imageInterface) => {
                                return (
                                <SwiperSlide key={image.imageUrl} className={`${styles.changeActiveSlider} ${styles.nextOrPrevSlider}`}>
                                    <img className={styles.imgEffect}  loading="lazy" src="/assets/images/aposentadoria/galeryBG.png" alt="Galery effect" />
                                    <img 
                                         loading="lazy"
                                        src={image.imageUrl}
                                        alt={image.imageDescription}
                                    />
                                </SwiperSlide>
                                )
                            })
                        }
                        
                    </Swiper>
                </div>
            </div>
        </section>
    )
}