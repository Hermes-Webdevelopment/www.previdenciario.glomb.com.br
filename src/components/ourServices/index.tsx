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
    bgimg1: string
    bgimg2: string
    bgimg3: string
}

export default function OurServices(props: OurServicesInterface) {

    const {title1, link1, text1, bgimg1, title2, link2, text2, bgimg2, title3, link3, text3, bgimg3,} = props

    return (
        <section className={styles.sectionOurServices}>
            <div className='container'>
                <div className={styles.firstBox} style={{
                        backgroundImage: `url(${bgimg1})`,
                    }}>
                    <div className={styles.whiteBox}>
                        <span>{title1}</span>
                        <div>
                            <p>{text1}</p>
                            <Link href={link1}>
                                    <u>Saiba mais</u>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.secondBox}>
                    <div style={{
                        backgroundImage: `url(${bgimg2})`,
                    }}>
                        <div style={{height:'24px'}}></div>
                        <div className={styles.whiteBox}>
                            <span>{title2}</span>
                            <div>
                                <p>{text2}</p>
                                <Link href={link2}>
                                    <u>Saiba mais</u>
                                </Link>
                            </div>
                        </div>
                        <Link href={link1} className={styles.desapear}>
                                <u>Saiba mais</u>
                        </Link>
                    </div>
                    <div style={{
                        backgroundImage: `url(${bgimg3})`,
                    }}>
                        <div style={{height:'24px'}}></div>
                        <div className={styles.whiteBox}>
                            <span>{title3}</span>
                            <div>
                                <p>{text3}</p>
                                <Link href={link3}>
                                    <u>Saiba mais</u>
                                </Link>
                            </div>
                        </div>
                        <Link href={link1} className={styles.desapear}>
                            <u>Saiba mais</u>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}