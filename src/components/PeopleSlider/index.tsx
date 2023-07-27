import Image from 'next/image';
import styles from './styles.module.scss';

import { ReactNode, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

interface peopleSlider {
    title: ReactNode | string;
    subTitle: ReactNode | string ;
    carrouselImages: carrouselImages[];
}

interface carrouselImages {
    imageUrl: string;
    imageTitle: string;
    imageSubTitle: string;
    text: string;
}[];

export default function PeopleSlider(props: peopleSlider) {

    const {title, subTitle, carrouselImages} = props

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
        window.addEventListener('resize', setDimension, {passive: true});
    
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])

    const getSliderNumber = () => {
        if(screenSize.dynamicWidth >= 1200) {
            return 5
        } else if (screenSize.dynamicWidth >= 992) {
            return 4
        } else if (screenSize.dynamicWidth >= 769) {
            return 3
        } else if (screenSize.dynamicWidth >= 502) {
            return 2
        } else {
            return 1
        }
    }

  return (
    
    <section className={styles.peopleSliderSection}>
        <div className={`container ${styles.peopleContainer}`}>

            <h1>
                {title}
            </h1>

            <h2>
                {subTitle}
            </h2>
        </div>
        <Swiper
                slidesPerView={getSliderNumber()}
                spaceBetween={screenSize.dynamicWidth >= 769 ? 56 : 10}
                loop={false}
            >
                {
                    carrouselImages.map((image: carrouselImages) => {
                        return (
                            <SwiperSlide key={Math.random()}>
                                <div className={styles.sliderContainer}>
                                    <div className={styles.imgDiv}>
                                        <Image 
                                            loading="lazy"
                                            height={413}
                                            width={254}
                                            src={image.imageUrl}
                                            alt={image.imageTitle}
                                        />
                                    </div>
                                    <div className={styles.descriptionDiv}>
                                        <div>
                                            <h2>{image.imageTitle}</h2>
                                            <p>{image.imageSubTitle}</p>
                                            <p>{image.text}</p>=
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
    </section>
  );
}