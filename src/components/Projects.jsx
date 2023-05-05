import React from 'react'
import styles from '../styles/Projects.module.css'
import { BsGithub } from 'react-icons/bs'
import { SiJavascript, SiCss3, SiHtml5, SiReact, SiBlender, SiThreedotjs } from 'react-icons/si'



const Projects = () => {
  return (
        <section className={styles.section__outer}>
            <div className={styles.section__inner}>
                <div>
                    <h1>Projecten</h1>
                </div>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.top__container}>
                            <img className={styles.img} src={'./images/projects_1.png'} alt="project" />
                            <div className={styles.layer}>
                                <div className={styles.layer__text}>
                                    <h3 onClick={() => window.open('https://nielsvanbrussel.github.io/gardenerWebsite/')}>gardener website</h3>
                                    <div className={styles.layer__icon__container}>
                                        <SiJavascript className={styles.layer__icon} size={26}/>
                                        <SiCss3 className={styles.layer__icon} size={26}/>
                                        <SiHtml5 className={styles.layer__icon} size={26}/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className={styles.bottom__container}>
                            <BsGithub size={22} className={styles.ghicon} onClick={() => window.open('https://github.com/NielsvanBrussel/gardenerWebsite')}/>   
                        </div>               
                    </div>
                    <div className={styles.card}>
                        <div className={styles.top__container}>
                            <img className={styles.img} src={'./images/projects_2.png'} alt="project" />
                            <div className={styles.layer}>
                                <div className={styles.layer__text}>
                                    <h3 onClick={() => window.open('https://nielsvanbrussel.github.io/graphcalc/')}>graphing calculator</h3>
                                    <div className={styles.layer__icon__container}>
                                        <SiJavascript className={styles.layer__icon} size={26}/>
                                        <SiCss3 className={styles.layer__icon} size={26}/>
                                        <SiHtml5 className={styles.layer__icon} size={26}/>
                                        <SiReact className={styles.layer__icon} size={26}/>
                                        <img className={styles.layer__d3} src = "./images/d3-js.svg" alt="My Happy SVG"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className={styles.bottom__container}>
                            <BsGithub size={22} className={styles.ghicon} onClick={() => window.open('https://github.com/NielsvanBrussel/graphcalc')}/>   
                        </div>               
                    </div>
                    <div className={styles.card}>
                        <div className={styles.top__container}>
                            <img className={styles.img} src={'./images/projects_3.png'} alt="project" />
                            <div className={styles.layer}>
                                <div className={styles.layer__text}>
                                    <h3 onClick={() => window.open('https://nielsvanbrussel.github.io/carmod/')}>car modifier</h3>
                                    <div className={styles.layer__icon__container}>
                                        <SiJavascript className={styles.layer__icon} size={26}/>
                                        <SiCss3 className={styles.layer__icon} size={26}/>
                                        <SiHtml5 className={styles.layer__icon} size={26}/>
                                        <SiReact className={styles.layer__icon} size={26}/>
                                        <SiThreedotjs className={styles.layer__icon} size={26}/>
                                        <SiBlender className={styles.layer__icon} size={26}/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className={styles.bottom__container}>
                            <BsGithub size={22} className={styles.ghicon} onClick={() => window.open('https://github.com/NielsvanBrussel/carmod')}/>   
                        </div>               
                    </div>
                    <div className={styles.card}>
                        <div className={styles.top__container}>
                            <img className={styles.img} src={'./images/projects_4.png'} alt="project" />
                            <div className={styles.layer}>
                                <div className={styles.layer__text}>
                                    <h3 onClick={() => window.open('https://nielsvanbrussel.github.io/orchard/')}>orchard</h3>
                                    <div className={styles.layer__icon__container}>
                                        <SiJavascript className={styles.layer__icon} size={26}/>
                                        <SiCss3 className={styles.layer__icon} size={26}/>
                                        <SiHtml5 className={styles.layer__icon} size={26}/>
                                        <SiReact className={styles.layer__icon} size={26}/>
                                        <SiThreedotjs className={styles.layer__icon} size={26}/>
                                        <SiBlender className={styles.layer__icon} size={26}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.bottom__container}>
                            <BsGithub size={22} className={styles.ghicon} onClick={() => window.open('https://github.com/NielsvanBrussel/orchard')}/>   
                        </div>               
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Projects