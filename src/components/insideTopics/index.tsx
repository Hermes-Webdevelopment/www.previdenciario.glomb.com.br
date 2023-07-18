import styles from './styles.module.scss';

import BlueButton from '../atons/blueButton';
import Image from 'next/image';
import { ReactNode } from 'react';

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
    cleanModeText?: string
}

export default function InsideTopics(props: insideTopicsInterface) {

    const {title, text, buttonText, buttonLink, listText, grayBoxText, image, imageDescription, invertImagePosition = false, cleanMode = false, cleanModeText} = props
    
    return (
        <section className={`${styles.insideContainer} ${cleanMode && styles.containerClean}`}>
            <div className={`container ${styles.insideTopicsMainBox} ${invertImagePosition ? styles.invertImagePosition : '' }`}>
                <div className={`${styles.imageContainer} ${cleanMode && styles.imageContainerClean}`}>
                    <Image 
                        loading="lazy"
                        width={ cleanMode ? 324 : 540}
                        height={ cleanMode ? 500 : 360}
                        src={image} 
                        alt={imageDescription} 
                    />
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