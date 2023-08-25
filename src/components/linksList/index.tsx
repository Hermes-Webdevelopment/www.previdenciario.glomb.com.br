import styles from './styles.module.scss';
import Image from 'next/image'

interface linksListInterface {
}

export default function LinksList(props: linksListInterface) {

    return (

        <section>
            <div className='container'>
                <div className={styles.linksSection}>
                    <Image
                        height={352}
                        width={767}
                        src={'/assets/images/links/imageTop.webp'}
                        alt={''}
                    />
                    
                    <Image
                        height={352}
                        width={767}
                        src={'/assets/images/links/imageBotton.webp'}
                        alt={''}
                    />
                </div>
            </div>
        </section>
    )
}