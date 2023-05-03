import React, { useState } from 'react'
import Education from './Education';
import Projects from './Projects';
import Bio from './Bio';
import Tech from './Tech';
import Intro from './Intro';
import WorkExperience from './WorkExperience';
import styles from '../styles/Sections.module.css'
import { TbArrowBigLeftLineFilled, TbArrowBigRightLineFilled } from 'react-icons/tb'
import Experience from '../Experience';

const SectionsMobile = () => {

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
                <Experience />
            )
            case 1 : return (
                <Intro />
            )
            case 2: return (
                <Bio />
            )
            case 3: return (
                <Education />
            )
            case 4: return (
                <Tech />
            )
            case 5: return (
                <Projects />
            )
            case 6: return (
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
            <div style={{ width: '100%', opacity: 1, border: 'solid 3px #3e1a57', borderRadius: '1rem'}}>
                <div style={{ width: `calc((${tab} / 6)* 100%)`, backgroundColor: '#820fdf', height: '0.5rem', borderRadius: '1rem' }}></div>
            </div>
            {tab !== 6 ?        
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

export default SectionsMobile