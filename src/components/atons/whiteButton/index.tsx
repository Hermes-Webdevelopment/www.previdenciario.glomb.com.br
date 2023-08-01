import Link from 'next/link';
import styles from './styles.module.scss';
import WhiteArrow from '@/public/assets/svgs/arrowButtonWhite.svg';

interface buttonProps {
    buttonLink: string; 
    buttonText: string; 
}

export default function WhiteButton(props: buttonProps) {

    const {buttonLink, buttonText} = props

    return (
        <div>
            <Link href={buttonLink} className={`${styles.buttonContainer}`}>
                <u>{buttonText}</u> <WhiteArrow />
            </Link>
        </div>
    )
}