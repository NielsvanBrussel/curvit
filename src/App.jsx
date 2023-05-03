
import React, { useState, useEffect } from 'react'

import styles from './styles/App.module.css'
import Experience from './Experience'
import Sections from './components/Sections'
import SectionsMobile from './components/SectionsMobile'



function App() {

  const initialWidth = window.innerWidth

  const [mobileViewMode, setMobileViewMode] = useState(initialWidth > 900 ? false : true)


  const changeViewMode = () => {

    if (window.innerWidth < 900 && mobileViewMode === false) {
      setMobileViewMode(true)
    } else if (window.innerWidth > 900 && mobileViewMode === true) {
      setMobileViewMode(false)
    }
  }


  window.addEventListener("resize", changeViewMode);

  useEffect(() => {
    console.log(mobileViewMode)
  }, [mobileViewMode])
  


  return (
    <>
      <div className={styles.container__outer}>
      <div className={styles.container__inner}>
        { mobileViewMode ? 
          <div className={styles.content__container__mobile}>
            <div className={styles.flex__container__mobile}>
              <SectionsMobile />
            </div>
          </div>  
        :
          <div className={styles.content__container}>
            <div className={styles.flex__container}>
              <Sections />
            </div>
            <div className={styles.flex__container}>
              <Experience />
            </div>
          </div>        
        }

        </div>
      </div>
    </>
  )
}

export default App
