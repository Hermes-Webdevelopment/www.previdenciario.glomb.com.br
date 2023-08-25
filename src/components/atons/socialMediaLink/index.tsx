import Link from 'next/link';
import styles from './styles.module.scss';
import Image from 'next/image';

interface socialMediaLinkProps {
    imageButton: string; 
    imageButtonAlt: string; 
    buttonTextTitle: string; 
    buttonText: string;
    buttonLink: string;
}

export default function SocialMediaLink(props: socialMediaLinkProps) {

    const {imageButton, buttonTextTitle, buttonText , imageButtonAlt, buttonLink} = props

    return (
        <Link href={buttonLink} className={`${styles.buttonContainer}`}>
            <div>
                <Image 
                    height={118}
                    width={163}
                    src={imageButton}
                    alt={imageButtonAlt}
                />
            </div>
            <div>
                <h3>
                    {buttonTextTitle}
                </h3>
                <p>
                    {buttonText}
                </p>
            </div>
        </Link>
    )
}