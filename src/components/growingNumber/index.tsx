import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import AnimatedValue from './numberAnimation';

interface GrowuingNumberInterface {
    title: string 
    text: string 
    years: string 
    yearsText: string 
    clients: string 
    clientsText: string
}

export default function GrowingNumber(props: GrowuingNumberInterface) {

    const { title, text, years, yearsText, clients, clientsText } = props

    return (
        <section className={styles.sectionGrowingNumber}>
            <div className='container'>
                <div className={styles.title}>
                    <span>{title}</span>
                    <span>{text}</span>
                </div>
                <div className={styles.numberAnimation}>
                <div>
                    <AnimatedValue id="years" years={Number(years)}/>
                    <span>{yearsText}</span>
                </div>
                <div>
                    <AnimatedValue id="clients" clients={Number(clients)} />
                    <span>{clientsText}</span>
                </div>
                </div>
            </div>
        </section>
    );
}