import styles from './styles.module.scss';
import Image from 'next/image';
import { ReactNode } from 'react';

import InstagramIcon from '@/public/assets/images/agradecimento/svgs/instagram.svg';
import BlogIcon from '@/public/assets/images/agradecimento/svgs/blog.svg';
import SiteIcon from '@/public/assets/images/agradecimento/svgs/site.svg';

interface singleText {
    image: string; 
    imageMobile: string; 
    imageAlt: string;
    title: ReactNode | string; 
    text: ReactNode | string; 
    socialMediaArray: {
        icon: string;
        name: string;
        link: string;
    }[]
}

export default function LinksBanner(props: singleText) {

    const {text, image, imageMobile, imageAlt, title, socialMediaArray} = props

    function brinRightIcon(icon: string) {
        
        if( icon === 'instagram') {
            return <InstagramIcon />
        } else if( icon === 'blog') {
            return <BlogIcon />
        } else if( icon === 'site') {
            return <SiteIcon />
        }
    }

    return (
        <section>
            <div className={`container ${styles.linksContainer}`}>
                <div className={styles.textBox}>
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {text}
                    </p>
                    <div>
                        {
                            socialMediaArray.map(socialMedia => {
                                return (
                                    <a href={socialMedia.link}>
                                        {brinRightIcon(socialMedia.icon)}
                                        <p>
                                            {socialMedia.name}
                                        </p>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.imageBox}>
                    <Image
                        loading="lazy"
                        height={1090}
                        width={943.5}
                        src={image}
                        alt={imageAlt}
                    />
                </div>
            </div>
        </section>
    )
}