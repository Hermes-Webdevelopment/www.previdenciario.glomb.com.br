import styles from './styles.module.scss';

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
                        <span id='years'>{years}</span>
                        <span>{yearsText}</span>
                    </div>
                    <div>
                        <span id='clients'>{clients}</span>
                        <span>{clientsText}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}