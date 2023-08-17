import styles from './styles.module.scss';
import Image from 'next/image'

import BlueCheck from '@/public/assets/svgs/blueCheck.svg';
import BlueButton from '../atons/blueButton';
import { ReactNode } from 'react';
import WhiteButton from '../atons/whiteButton';
import { getScreenSiteAndWidth } from '../../helpers/screenSize';

interface staticBannerInterface {
    title: ReactNode | string; 
    subTitle: ReactNode | string; 
    buttonText: string; 
    buttonLink: string; 
    advantages?: string[]; 
    headerDesktop: string;
    headerMobile: string;
    headerDesktopDescription: string;
    headerMobileDescription: string;
}

export default function StaticBanner(props: staticBannerInterface) {

    const {title, subTitle, buttonText, buttonLink, advantages, headerDesktop, headerDesktopDescription, headerMobile, headerMobileDescription} = props

    const screenSize = getScreenSiteAndWidth()

    return (
        <section className={styles.staticbannerSection}>
            <div className={`container ${styles.bannerContainer}`}>
                <div className={styles.textBox}>
                    <h1>{title}</h1>
                    <p>{subTitle}</p>
                    <div className={`apearMobile ${styles.width100}`}>
                        <BlueButton 
                            buttonLink={buttonLink}
                            buttonText={buttonText}
                        />
                    </div>
                    <div className={`apearDesktop`}>
                        <WhiteButton 
                            buttonLink={buttonLink}
                            buttonText={buttonText}
                        />
                    </div>
                    <div className={styles.checkedContainer}>
                        {
                            advantages &&
                            advantages.map((advantage: string) => {
                                return <p key={advantage}><BlueCheck />{advantage}</p>
                            })
                        }
                    </div>
                </div>
                <div className={styles.imageBox}>
                    
                    {
                        screenSize.dynamicWidth >= 992 ?
                            <Image
                                className={'apearMobile'}
                                height={1090}
                                width={1000}
                                src={headerDesktop}
                                alt={headerDesktopDescription}
                                priority
                            />

                            :

                            <Image
                                className={'apearDesktop'}
                                height={965}
                                width={503}
                                src={headerMobile}
                                alt={headerMobileDescription}
                                priority
                            />
                    }

                </div>
            </div>
        </section>
    )
}