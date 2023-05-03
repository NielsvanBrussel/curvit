import React, { useState} from 'react'
import styles from '../styles/Bio.module.css'

const Bio = () => {
  return (
    <section className={styles.section__outer}>
        <div className={styles.section__inner}>
            <h1 className="header__h1">Bio</h1>
            <div className="header__text">
                <ul className={styles.header__ul}>
                    <li className={styles.header__li}>
                        <p className="header__p">full stack developer</p>
                    </li>
                    <li className={styles.header__li}>
                        <p className="header__p">Email:</p>
                        <p className="header__p">niels_vanbrussel@hotmail.com</p>
                    </li>
                    <li className={styles.header__li}>
                        <p className="header__p">Geboortedatum:</p>
                        <p className="header__p">15/10/1991</p>                         
                    </li>
                    <li className={styles.header__li}>
                        <p className="header__p">Locatie:</p>
                        <p className="header__p">Antwerpen</p>   
                    </li>
                    <li className={styles.header__li}>
                        <p className="header__p">Nationaliteit:</p>
                        <p className="header__p">Belg</p>   
                    </li>
                    <li className={styles.header__li}>
                        <p className="header__p">Github:</p>
                        <a href="https://github.com/NielsvanBrussel" target="_blank">https://github.com/NielsvanBrussel</a>   
                    </li>
                </ul> 
            </div>
        </div>
    </section>

  )
}

export default Bio