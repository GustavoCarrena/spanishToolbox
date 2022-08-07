import React from 'react';
import styles from './testLevel.module.scss';

export const TestLevel = () => {
  return (
    <section className={styles.sectionContainer}>
        
        <div className={styles.firstContainer}>
            <div className={styles.leftImgContainer}>
                <img className={styles.leftImg} src="assets/img/generales/iconos-izq.svg" alt="images" />
                <img className={styles.rightImg}src="assets/img/generales/iconos-der.svg" alt="images" />
            </div>
            <div className={styles.allLevelsInfoContainer}>
                <div className={styles.allLevels}>
                    <h6 className={styles.allLevelsTitle}>ALL LEVELS (A1 to C2)</h6>
                    <span className={styles.allLevelsLine}></span>
                    <p className={styles.allLevelsText}>We base our learning programs on the Common European Framework of Reference for Languages to
                        provide a solid learning structure to our courses.</p>
                </div>
                <button className={styles.allLevelsBtn} href="levels_information.html">Read More</button>
            </div>
            <div className={styles.rightImgContainer}>
                <img className={styles.img} src="assets/img/generales/iconos-der.svg" alt="images"/>
            </div>
        </div>

        <div className={styles.secondContainer}>
            <div className={styles.testLevelsContainer}>
                <img className={styles.testLevelsImg} src="assets/img/fotos/AdobeStock_103519056.jpg" alt="photo"/>
                <div className={styles.testYourLevel}>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title}>Test your level</h2>
                        <span className={styles.line}></span>
                    </div>
                    <p className={styles.testYourLevelText}>Help us offer you the course that best meets your needs. If you have prior
                        knowledge, took some hours of Spanish classNamees in the past, or can conjugate irregular
                        subjunctive verbs like a rockstar, take our leveling test.</p>
                    <button className={styles.testYourLevelBtn} href="levels_information.html">Test Now!</button>
                </div>
            </div>
            <div className={styles.arrowContainer}>
                <img className={styles.arrow} src="assets/img/hero/hero_flecha.svg" alt="arrow-image"/>
            </div>
        </div>
        <div className={styles.bottomBackgroundContainer}>
            <img className={styles.bottomBackground} src="assets/img/generales/onda-04.svg" alt="background" />
        </div>
    
    </section>
  )
}
