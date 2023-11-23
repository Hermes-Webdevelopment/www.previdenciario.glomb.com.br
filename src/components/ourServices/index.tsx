import styles from './styles.module.scss';
import Link from 'next/link';

interface OurServicesInterface {
    title1: string 
    link1: string 
    text1: string 
    title2: string 
    link2: string 
    text2: string 
    title3: string 
    link3: string 
    text3: string
}

export default function OurServices(props: OurServicesInterface) {

    const {title1, link1, text1, title2, link2, text2, title3, link3, text3} = props

    return (
        <section className={styles.sectionFaq}>
            <div className='container'>
                <div className={styles.firstBox}>
                    <span>{title1}</span>
                    <div className={styles.whiteBox}>
                        <p>{text1}</p>
                        <Link href={link1}>
                                Saiba mais
                        </Link>
                    </div>
                </div>
                <div className={styles.secondBox}>
                    <div className={styles.whiteBox}>
                        <span>{title2}</span>
                        <div>
                            <p>{text2}</p>
                            <Link href={link2}>
                                Saiba mais
                            </Link>
                        </div>
                    </div>
                    <div className={styles.whiteBox}>
                        <span>{title3}</span>
                        <div>
                            <p>{text3}</p>
                            <Link href={link3}>
                                Saiba mais
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}