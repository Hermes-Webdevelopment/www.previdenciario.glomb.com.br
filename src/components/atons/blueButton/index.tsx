import Link from 'next/link';
import styles from './styles.module.scss';

interface buttonProps {
    buttonLink: string; 
    buttonText: string; 
    isFloating?: boolean;
    cleanMode?: boolean
}

export default function BlueButton(props: buttonProps) {

    const {buttonLink, buttonText, isFloating = false, cleanMode = false} = props

    return (
        <div className={`${isFloating && styles.floatingButton} ${cleanMode && styles.btnClean}`}>
            <Link href={buttonLink} className={`${styles.buttonContainer}`}>
                {buttonText}
            </Link>
        </div>
    )
}