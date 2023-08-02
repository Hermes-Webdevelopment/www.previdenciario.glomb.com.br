import Link from 'next/link';
import styles from './styles.module.scss';
import WhiteArrow from '@/public/assets/svgs/arrowButtonWhite.svg';
import BlueArrow from '@/public/assets/svgs/arrowButtonBlue.svg';

interface buttonProps {
    buttonLink: string; 
    buttonText: string; 
    blueVariable?: boolean;
}

export default function WhiteButton(props: buttonProps) {

    const {buttonLink, buttonText, blueVariable = false} = props

    return (
        <div>
            <Link href={buttonLink} className={`${styles.buttonContainer} ${blueVariable ? styles.changeToBlue : ''}`}>
                <u>{buttonText}</u> {blueVariable ? <BlueArrow /> : <WhiteArrow />}
            </Link>
        </div>
    )
}