import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './letsLearn.module.scss';

export const LetsLearn = () => {
  
    const navigate = useNavigate();
    const handleNavigate = (route) =>{
        navigate(route)
    };
  
  return (
    
    <section className={styles.letsLearnContainer}>
        
        <img className={styles.greenCircle} src="assets/img/hero/hero-_circ-verde.svg" alt="green circle"/>
        
        <header className={styles.headerContainer}>
            <h1 className={styles.titleH1}>                    
                <span className={styles.firstLine}>LET´S LEARN</span>
                <span className={styles.secondLine}>SPANISH!</span>
                <span className={styles.thirdLine}>Online. Professional. Simple</span>
            </h1>
        </header>

        <main className={styles.mainContainer}>
            <div className={styles.cards}>
                <div className={styles.imgContainer}>
                    <img className={`${styles.firstCardImg} ${styles.img}`} src="/assets/img/fotos/AdobeStock_158540061.jpg" alt="photo"/>
                </div>
                <div className={styles.titleContainer}>
                    <h6 className={`${styles.firstCardTitle} ${styles.title}`}>REGULAR SPANISH COURSES</h6>
                </div>
                <div className={styles.textContainer}>
                    <p className={`${styles.firstCardText} ${styles.text}`}>Spanish courses designed to immerse students in real-life language settings by developing their
                        speaking, listening, reading, and writing skills. Available for all levels.</p>
                </div>
                <button className={`${styles.firstCardButton} ${styles.btn}`} onClick={() => handleNavigate('/')}>Read More</button>
            </div>
            <div className={styles.cards}>
                <div className={styles.imgContainer}>
                    <img className={`${styles.secondCardImg} ${styles.img}`} src="/assets/img/fotos/AdobeStock_220213829.jpg" alt="photo"/>
                </div>
                <div className={styles.titleContainer}>
                    <h6 className={`${styles.secondCardTitle} ${styles.title}`}>TAILOR MADE SPANISH COURSES</h6>
                </div>
                <div className={styles.textContainer}>
                    <p className={`${styles.secondCardText} ${styles.text}`}>Courses designed for students with specific needs that regular courses cannot meet, such as
                        advancing at a different pace, focusing on a particular topic or skill, or customized vocabulary
                        for a particular setting/role.</p>
                </div>
                <button className={`${styles.secondCardButton} ${styles.btn}`} onClick={() => handleNavigate('/')}>Read More</button>
            </div>
            <div className={styles.cards}>
                <div className={styles.imgContainer}>
                    <img className={`${styles.thirdCardImg} ${styles.img}`} src="/assets/img/fotos/clase-online.jpg" alt="photo"/>
                </div>
                <div className={styles.titleContainer}>
                    <h6 className={`${styles.thirdCardTitle}  ${styles.title}`}>CONVERSATIONS WORKSHOP</h6>
                </div>
                <div className={styles.textContainer}>
                    <p className={`${styles.thirdCardText} ${styles.text}`}>Created to help students build confidence to engage in conversation with natives, empower shy
                        speakers, and enhance proficiency in a welcoming environment.</p>
                 </div>
                <button className={`${styles.thirdCardButton} ${styles.btn}`} onClick={() => handleNavigate('/')}>Read More</button>
            </div>
            <img className={styles.yellowCircle} src="assets/img/hero/hero-circ-amarillo.svg" alt="circle image"/>
        </main>



    </section>

  )
}
