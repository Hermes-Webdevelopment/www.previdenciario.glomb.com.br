import styles from './styles.module.scss'

interface MapInterface {
    
}
export default function Map(props: MapInterface) {

    const {} = props

    return (
        <section>
            <div className="container" style={{width:"100%"}}>
                <div className={styles.titleContainer}>
                    <span>Onde estamos</span>
                    <span>Rua Visconde do Rio Branco, 1488 - 19º andar</span>
                    <span>Curitiba - Paraná</span>
                </div>
                <div className={styles.mapIframe}>
                    <iframe 
                        width="100%" 
                        height="400" 
                        frameBorder="0"  
                        src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Rua%20Visconde%20do%20Rio%20Branco,%201488%20-%2019%C2%BA%20andar+(Glomb%20Advogados)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/"></a>
                    </iframe>
                </div>
            </div>
        </section>
    );
}