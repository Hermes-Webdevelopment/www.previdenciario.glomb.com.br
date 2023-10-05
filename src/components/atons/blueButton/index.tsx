import Link from 'next/link';
import styles from './styles.module.scss';
import { ReactNode, useEffect, useState } from 'react';

interface buttonProps {
    buttonLink: string; 
    buttonText: string | ReactNode; 
    isFloating?: boolean;
    cleanMode?: boolean;
    transparentMode?: boolean;
}

export default function BlueButton(props: buttonProps) {

    const {buttonLink, buttonText, isFloating = false, cleanMode = false, transparentMode = false} = props

    const [isVisible, setIsVisible] = useState(false)

    let height = 0
    let windowHeight = 0
    
    useEffect(() => {
        let elem = document.getElementById("footerContainer")
        height = elem ? elem.getBoundingClientRect().top : 0
        windowHeight = window.innerHeight

        window.addEventListener("scroll", listenToScroll);
        return () =>
           window.removeEventListener("scroll", listenToScroll);
    }, [])

    const listenToScroll = () => {

        let heightToHideFrom = height - windowHeight * 2;

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      
        if (winScroll > heightToHideFrom) {
             setIsVisible(true);
        } else {
             setIsVisible(false);
        }
    };

    return (
        <div className={`${styles.mainMode} ${styles.forceChange} ${isFloating ? styles.floatingButton : ''} ${cleanMode ? styles.btnClean : ''} ${transparentMode ? styles.btnTransparent : ''}`}>
            <Link href={buttonLink} className={`${styles.buttonContainer} ${isVisible && isFloating ? styles.changeOpacity : ''}`} prefetch={false}>
                <p>{buttonText}</p>
            </Link>
        </div>
    )
}