import React from 'react'
import styles from '../styles/Education.module.css'

const Education = () => {
  return (
    <section className={styles.section__outer}>
        <div className={styles.section__inner}>
            <div>
                <h1>Studies & opleidingen</h1>
            </div>
            <div>
                <ul>
                    <li>ASO middelbaar onderwijs: Moderne Talen Wetenschappen. </li>
                    <li>Hogere Zeevaartschool (3 jaar, stopgezet zonder diploma). </li>
                    <li>Zelfstudie IT (ongeveer 2 jaar)</li>
                </ul>
            </div>
            <div style={{ marginTop: '4rem'}}>
                <h1>Competenties</h1>
            </div>
            <div>
                <ul>
                    <li>Sterk analytisch en probleemoplossend vermogen </li>
                    <li>Leergierig</li>
                    <li>Hulpvaardig</li>
                    <li>Integer</li>
                    <li>Zelfstandig</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Education