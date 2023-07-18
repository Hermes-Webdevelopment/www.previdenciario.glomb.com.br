import styles from './styles.module.scss';

import BlueButton from '../atons/blueButton';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';

interface insideTopicsInterface {
    title: ReactNode | string, 
    text: ReactNode, 
    buttonText: string, 
    buttonLink: string, 
    image: string, 
    imageDescription: string,
    listText?: string[] | ReactNode[], 
    grayBoxText?: ReactNode | string, 
    invertImagePosition?: boolean,
    cleanMode?: boolean,
    cleanModeText?: string,
    imageClean?: string,
}

export default function InsideTopics(props: insideTopicsInterface) {

    const {title, text, buttonText, buttonLink, listText, grayBoxText, image, imageDescription, invertImagePosition = false, cleanMode = false, cleanModeText, imageClean} = props
    
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
        <section className={`${styles.insideContainer} ${cleanMode && styles.containerClean}`}>
            <div className={`container ${styles.insideTopicsMainBox} ${invertImagePosition ? styles.invertImagePosition : '' }`}>
                <div className={`${styles.imageContainer} ${cleanMode && styles.imageContainerClean}`}>
                    {
                        screenSize.dynamicWidth >= 992 && cleanMode && imageClean ?
                            <Image 
                                loading="lazy"
                                width={ cleanMode ? 324 : 540}
                                height={ cleanMode ? 500 : 360}
                                src={imageClean} 
                                alt={imageDescription} 
                            />
                            :
                            <Image 
                                loading="lazy"
                                width={ cleanMode ? 324 : 540}
                                height={ cleanMode ? 500 : 360}
                                src={image} 
                                alt={imageDescription} 
                            />
                    }
                </div>
                <div className={`${styles.textBoxContainer} ${cleanMode && styles.textBoxContainerClean}`}>
                    <h2>{title}</h2>
                    <div>{text}</div>
                    {
                        listText &&
                            <ul>
                                {
                                    listText.map((text: string | ReactNode) => {
                                        return <li key={Math.random()}><p>{text}</p></li>
                                    })
                                }
                            </ul>
                    }
                    {
                        grayBoxText &&
                        <div className={styles.grayBox}>
                            <p>{grayBoxText}</p>
                        </div>
                    }
                    <BlueButton buttonLink={buttonLink} buttonText={buttonText} cleanMode={cleanMode}/>
                </div>
            </div>
                {
                    cleanModeText &&
                    <div className={`container ${styles.cleanModeExtraText}`}>
                        <p>{cleanModeText}</p>
                    </div>
                }
        </section>
    )
}