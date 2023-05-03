import React, { useState } from 'react'

const Fake = () => {
  return (
    <div className={styles.card}>
        <div className={styles.top__container}>
            <img className={styles.img} src={'/images/projects_4.png'} alt="project" />
            <div className={styles.layer}>
                <div className={styles.layer__text}>
                    <h3 onClick={() => window.open('https://nielsvanbrussel.github.io/orchard/')}>orchard</h3>
                    <div className={styles.layer__icon__container}>
                        <SiJavascript className={styles.layer__icon} size={26}/>
                        <SiCss3 className={styles.layer__icon} size={26}/>
                        <SiHtml5 className={styles.layer__icon} size={26}/>
                        <SiReact className={styles.layer__icon} size={26}/>
                        <SiBlender className={styles.layer__icon} size={26}/>
                    </div>
                </div>
                
            </div>
        </div>
        <div className={styles.bottom__container}>
            <BsGithub size={22} className={styles.ghicon} onClick={() => window.open('https://github.com/NielsvanBrussel/orchard')}/>   
        </div>               
    </div>
  )
}

export default Fake