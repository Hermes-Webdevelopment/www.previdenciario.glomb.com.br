import styles from './styles.module.scss';

import OrangeForm from '@/public/assets/svgs/firstForm.svg';
import GreenForm from '@/public/assets/svgs/secondForm.svg';
import BlueForm from '@/public/assets/svgs/thirdForm.svg';

import AbstractFormSemiRound from '@/public/assets/svgs/abstractFormOne.svg';
import AbstractFormline from '@/public/assets/svgs/abstractFormTwo.svg';
import AbstractFormSemiBottonLine from '@/public/assets/svgs/abstractFormThree.svg';
import { ReactNode } from 'react';

interface formsTitleInterface {
    firstTitle: string, 
    firstSubTitle: ReactNode | string, 
    secondTitle: string, 
    secondSubTitle: ReactNode | string, 
    thirdTitle: string, 
    thirdSubTitle: ReactNode | string,
    cleanModel?: boolean
}

export default function FormsTopics(props: formsTitleInterface) {

    const {firstTitle, firstSubTitle, secondTitle, secondSubTitle, thirdTitle, thirdSubTitle, cleanModel = false} = props

    return (
        <section className={styles.formsTopicsSection}>
            <div className={`container ${styles.formsTopics}`}>
                <div className={`${styles.singleFormBox} ${styles.flexStart}`}>
                    {
                        cleanModel ?
                            <AbstractFormSemiRound />
                        :
                            <OrangeForm />
                    }
                    <div>
                        <h1>{firstTitle}</h1>
                        <p>{firstSubTitle}</p>
                    </div>
                </div>
                <div className={`${styles.singleFormBox} ${styles.center}`}>
                    {
                        cleanModel ?
                            <AbstractFormline />
                        :
                            <GreenForm />
                    }
                    <div>
                        <h1>{secondTitle}</h1>
                        <p>{secondSubTitle}</p>
                    </div>
                </div>
                <div className={`${styles.singleFormBox} ${styles.flexEnd}`}>
                    {
                        cleanModel ?
                            <AbstractFormSemiBottonLine />
                        :
                            <BlueForm />
                    }
                    <div>
                        <h1>{thirdTitle}</h1>
                        <p>{thirdSubTitle}</p>
                    </div>
                </div>
            </div>
            <div className={styles.backgroundPlay}></div>
        </section>
    )
}