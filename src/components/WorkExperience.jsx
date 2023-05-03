import React from 'react'
import styles from '../styles/WorkExperience.module.css'

const WorkExperience = () => {
  return (
    <section className={styles.section__outer}>
        <div className={styles.section__inner}>
            <div>
                <h1>Werkervaring</h1>
            </div>
            <div>
                <ul className={styles.exp__list}>
                    <li className={styles.exp__item}>
                        <div className={styles.exp__title__container}>
                            <div className={styles.exp__img__container}>
                                <img className={styles.exp__img} src="./images/plantsoon.png" alt="Doowapp" /> 
                                <div className={styles.layer}></div>
                            </div>
                            <h3 className={styles.exp__list__header}>Tuinman &nbsp; @ &nbsp; Plantsoon</h3>
                        </div>
                        <p className={styles.exp__date}>12/2017 - 06/2018</p>
                        <p className={styles.exp__p}>Tuinaanleg en tuinonderhoud bij een tuinaannemer. Van klein onderhoud zoals gras maaien, hagen scheren, verticuteren tot volledige tuinaanleg zoals grasmatten leggen, drainage aanleggen en bomen snoeien/uitdoen. </p>
                    </li>
                    <li className={styles.exp__item}>
                        <div className={styles.exp__title__container}>
                            <div className={styles.exp__img__container}>
                                <img className={styles.exp__img} src="./images/radikal.png" alt="Doowapp" />
                                <div className={styles.layer}></div>
                            </div>
                            <h3 className={styles.exp__list__header}>Stagair frontend developer &nbsp; @ &nbsp; Radikal</h3> 
                        </div>
                        <p className={styles.exp__date}>08/2021 - 10/2021</p>
                        <p className={styles.exp__p}>Grotendeels Wordpress theme development met Timber & Twig. Bijvoorbeeld vertalingen doorvoeren met WPML, omzetten van de bestaande website naar wordpress maar ook enkele kleine React projecten.</p>
                    </li>
                    <li className={styles.exp__item}>
                        <div className={styles.exp__title__container}>
                            <div className={styles.exp__img__container}>
                                <img className={styles.exp__img} src="./images/logodoo.png" alt="Doowapp" />
                                <div className={styles.layer}></div>
                            </div>
                            <h3 className={styles.exp__list__header}>Full stack developer &nbsp; @ &nbsp; Zaterdag Zondag</h3> 
                        </div>
                        <p className={styles.exp__date}>12/2021 - 12/2022</p>
                        <p className={styles.exp__p}>Ontwikkeling van een mobiele en een webapplicatie in React (Native) en bijhorende backend (NodeJS). De applicatie is vooral bestemd voor koren om op te oefenen en heeft features zoals een speciaal aangepaste audio speler, een eigen login systeem, playlists aanmaken en gebruiken, een newsfeed, etc. Daarnaast is er ook een admindashboard voor gebruikersbeheer, koorbeheer, liedjesbeheer & statistieken. De backend is gemaakt met Express, PostgresQL database & S3 datastorage.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default WorkExperience