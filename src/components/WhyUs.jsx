import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './whyUs.module.scss';

export const WhyUs = () => {
  
    const navigate = useNavigate();
    const handleNavigate = (url) =>{
        navigate(url)
    };
  
    return (
    <section className={styles.sectionContainer}>
        <header className={styles.rectangle}>
            <div className={styles.rectangleLines}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
            </div>
            <div className={styles.rectangleLines}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
            </div>
            <div className={styles.rectangleLines}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
            </div>
        </header>
        
        <div className={styles.titleContainer}>
            <h6 className={styles.title}>Why us</h6>
            <span className={styles.line}></span>
        </div>
        
        <main className={styles.main}>
            <div className={styles.card}>
                <img  className={`${styles.cardImg} ${styles.firstImg} `} src="assets/img/iconos/i-_online.svg" alt="icon"/>
                <div className={styles.cardTextContainer}>
                    <h6 className={styles.cardTitle}>ONLINE</h6>
                    <p className={styles.cardText}>All of our courses are digital native and take advantage of many online
                        learning resources on the web.</p>
                </div>
            </div>
            <div className={styles.card}>
                <img className={`${styles.cardImg} ${styles.secondImg} `} src="assets/img/iconos/i-_teaching-staff.svg" alt="icon"/>
                <div className={styles.cardTextContainer}>
                    <h6 className={styles.cardTitle}>TEACHING STAFF</h6>
                    <p className={styles.cardText}>All of our Spanish language professionals are native speakers with teaching experience.</p>
                </div>
            </div>
            <div className={styles.card}>
                <img className={`${styles.cardImg} ${styles.thirdImg} `} src="assets/img/iconos/i-_methodology.svg" alt="icon"/>
                <div className={styles.cardTextContainer}>
                    <h6 className={styles.cardTitle}>METHODOLOGY</h6>
                    <p className={styles.cardText}>We focus on teaching you to speak, read, write, and listen to real-life Spanish as is used by
                        natives.</p>
                </div>
            </div>
        </main>
        <footer className={styles.btnContainer}>
            <button className={styles.btn} onClick={() => handleNavigate ('/')} >Read More</button>
        </footer>
</section>

  )
}
