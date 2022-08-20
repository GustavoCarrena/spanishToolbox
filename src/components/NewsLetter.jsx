import React from 'react';
import styles from './newsletter.module.scss';
import { useNavigate } from "react-router-dom";

export const NewsLetter = () => {
  
    const navigate = useNavigate();
    const handleNavigate = (url) =>{
        navigate(url)
    };
  
    return (
    
    <>
        <div className={styles.bottomBackgroundContainer}>
            <img className={styles.bottomBackground} src="assets/img/generales/onda-04.svg" alt="background" />
        </div>
        <section className={styles.sectionContainer}>
            <div className={styles.headerContent}>
                <header className={styles.titleContanier}>
                    <img className={styles.img} src="assets/img/generales/newsletter.svg" alt="packet"/>
                    <div className={styles.title}>
                        Newsletter
                        <span className={styles.line}></span>
                    </div>
                </header>
                <p className={styles.suscribe}>Subscribe to stay updated on the latest news of our Spanish-speaking community.
                    (Coming soon)</p>
                <div className={styles.formContainer}>
                    <input className={styles.input} type="text" placeholder="Your email"/>
                    <button className={styles.button} onClick={()=> handleNavigate('/home')} >Suscribe</button>
                </div>
            </div>
            <div className={styles.papers}>
                <img className={styles.regularPaper} src="assets/img/hero/post-it.svg" alt="image" />
                <img className={styles.smallPaper} src="assets/img/hero/post-it.svg" alt="image"/>
            </div>
            <img className={styles.lamp} src="assets/img/hero/lampara.svg" alt="image"/>
        </section>
    </>
  )
}
