import styles from './styles.module.scss';
import GlombMobile from '@/public/assets/images/svgs/glomb_mobile.svg';

export default function LogoHead() {

    return (

        <section className={`container ${styles.headContainer}`}>
            <>
                <GlombMobile className='apearDesktop' />
            </>
        </section>
    )
}