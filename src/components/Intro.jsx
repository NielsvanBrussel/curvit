import React from 'react'
import styles from '../styles/Intro.module.css'

const Intro = () => {
  return (
    <section className={styles.section__outer}>
        <div className={styles.section__inner}>
            <div className={styles.container}>
                <h1>Curriculum Vitae</h1>
                <h3>Niels van Brussel</h3>                
            </div>
        </div>
    </section>
  )
}

export default Intro