import styles from './styles.module.scss';
import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Star from '@/public/assets/svgs/star.svg';

import SwiperButtons from './swiperButtons';

interface imageGalerySliderInterface {
    sectionTitle: string | ReactNode,
    clientCardsTitle: string,
    imageUrl: string,
    imageDescription: string,
    clientsComentCard: {
        title: string;
        text: string;
        starNumber: number;
        clientName: string;
    }[];
}

export default function PeopleComents(props: imageGalerySliderInterface) {

    const {sectionTitle, clientsComentCard, imageUrl, imageDescription, clientCardsTitle} = props

    const starscounter = (stars: number) => {

        const starsSvg = [];
        for (let i = 0; i < stars ; i++) {
            starsSvg.push(<Star key={Math.random()} />);
        }
    
        return starsSvg
    }
    
    return (
        <section className={styles.peopleComentsSection}>
            <div className={`container ${styles.PeopleComentsContainer}`}>
                <h2>{sectionTitle}</h2>
                <div>
                    <div className={styles.imageContainer}>
                        <img 
                            loading="lazy"
                            src={imageUrl}
                            alt={imageDescription}
                        />
                    </div>
                    <div className={styles.sliderComentsContainer}>
                        <h2>{clientCardsTitle}</h2>
                        <Swiper
                            slidesPerView={1} 
                            className="mySwiper"
                            centeredSlides={true}
                            spaceBetween={30}
                        >
                            <SwiperButtons />
                            
                            {
                                clientsComentCard.map((coment) => {
                                    return (
                                        <SwiperSlide key={coment.title}>
                                            <div className={styles.comentBox}>
                                                <h3>{coment.title}</h3>
                                                <div>
                                                    {
                                                        starscounter(coment.starNumber).map((star) => {
                                                            return star
                                                        })
                                                    }
                                                </div>
                                                <p>{coment.text}</p>
                                                <h4>{coment.clientName}</h4>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                            
                        </Swiper>
                    </div>
                </div>
                
            </div>
        </section>
    )
}