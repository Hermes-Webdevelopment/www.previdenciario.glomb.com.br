import Image from 'next/image';
import styles from './styles.module.scss';

import { ReactNode} from 'react';

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
        <div className={styles.sliderContainer}>
            {
                carrouselImages.map((image: carrouselImages) => {
                    return (
                        <div key={Math.random()}>
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
                    )
                })
            }
        </div>
    </section>
  );
}