import React, { useState, useEffect } from 'react'
import Education from './Education';
import Projects from './Projects';
import Bio from './Bio';
import Tech from './Tech';
import Intro from './Intro';
import WorkExperience from './WorkExperience';
import styles from '../styles/Sections.module.css'
import { TbArrowBigLeftLineFilled, TbArrowBigRightLineFilled } from 'react-icons/tb'


const Sections = () => {

    const [tab, setTab] = useState(0)
    
    const prevTab = () => {
        setTab(prevState => prevState - 1)
    }

    const nextTab = () => {
        setTab(prevState => prevState + 1)
    }


    const Switch = () => {
        switch (tab) {
            case 0: return (
                <Intro />
            )
            case 1: return (
                <Bio />
            )
            case 2: return (
                <Education />
            )
            case 3: return (
                <Tech />
            )
            case 4: return (
                <Projects />
            )
            case 5: return (
                <WorkExperience />
            )
            default: return (
                <div>error</div>
            )
        }
    }


  return (
    <div className={styles.container}>
        <Switch />
        <div className={styles.switch__controller}>
            {tab !== 0?        
                <div className={styles.button__container} onClick={() => prevTab()}>
                    <TbArrowBigLeftLineFilled className={styles.button__icon}/>
                </div>
                :
                <div className={styles.button__container__hidden}>
                    <TbArrowBigLeftLineFilled className={styles.button__icon}/>
                </div>
            }
            <div className={styles.progressbar__container} >
                <div style={{ width: `calc(${tab} * 20%)` }} className={styles.progressbar}></div>
            </div>
            {tab !== 5 ?        
                <div className={styles.button__container} onClick={() => nextTab()}>
                    <TbArrowBigRightLineFilled className={styles.button__icon}/>
                </div>
                :
                <div className={styles.button__container__hidden}>
                    <TbArrowBigRightLineFilled className={styles.button__icon}/>
                </div>
            }
        </div>
    </div>
  )
}

export default Sections