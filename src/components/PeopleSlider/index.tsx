import styles from './styles.module.scss';

import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

interface peopleSlider {
    title: ReactNode | string;
    subTitle: ReactNode | string ;
    carrouselImages: {
        imageUrl: string;
        imageTitle: string;
        imageSubTitle: string;
        text: string;
    }[];
}

interface carrouselImages {
    imageUrl: string;
    imageTitle: string;
    imageSubTitle: string;
    text: string;
}[];

export default function PeopleSlider(props: peopleSlider) {

    const {title, subTitle, carrouselImages} = props

  return (
    
    <section className={styles.peopleSliderSection}>
        <div className={`container ${styles.peopleContainer}`}>

            <h1>
                {title}
            </h1>

            <h2>
                {subTitle}
            </h2>

            <Swiper
                slidesPerView={5}
                spaceBetween={56}
                freeMode={true}
                modules={[FreeMode]}
            >
                {
                    carrouselImages.map((image: carrouselImages) => {
                        return (
                            <SwiperSlide key={image.imageTitle}>
                                <div className={styles.sliderContainer}>
                                    <div className={styles.imgDiv}>
                                        <img 
                                            loading="lazy"
                                            height={413}
                                            width={254}
                                            src={image.imageUrl}
                                            alt={image.imageTitle}
                                        />
                                    </div>
                                    <div className={styles.descriptionDiv}>
                                        <h2>{image.imageTitle}</h2>
                                        <p>{image.imageSubTitle}</p>
                                        <p>{image.text}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    </section>
  );
}