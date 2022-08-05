import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './ondemandCourses.module.scss';

export const OndemandCourses = () => {

  const navigate = useNavigate();
  const handleNavigate = (url) =>{
    navigate(url)
  };

  return (
    <section className={styles.sectionContainer}>
    <header className={styles.headerContainer}>
        <img className={styles.headerLogo} src="assets/img/generales/elementos-01.svg" alt="logo"/>
        <p className={styles.textContainer}><span className={styles.text}>On-Demand Courses</span><span className={styles.line}></span> </p>
    </header>
    <main className={styles.mainContainer}>
        <section className={styles.cardsContainer}>
            <div className={`${styles.firstCard} ${styles.cards}`}>
                <img className={styles.cardImg} src="assets/img/fotos/mr-cup-fabien-barral-Fo5dTm6ID1Y-unsplash.jpg" alt="photo"/>
                <div className={styles.cardTitleContainer}>
                  <h6 className={styles.cardTitle}>ARGENTINE CULTURE COURSES</h6>
                  <div className={styles.cardTextContainer}>
                    <p className={styles.cardText}>Local university professors introduce students to the history, economy, and cultural heritage
                      of the Spanish-speaking countries covered. Available both in English and Spanish.</p>
                  </div>
                </div>
                <button className={`${styles.cardButton} ${styles.firstCardButton}`} onClick={() => handleNavigate('/')}>Read More</button>
            </div>
            <div className={`${styles.secondCard} ${styles.cards}`}>
                <img className={styles.cardImg} src="assets/img/fotos/ruthson-zimmerman-Ws4wd-vJ9M0-unsplash.jpg" alt="photo"/>
                <div className={styles.cardTitleContainer}>
                  <h6 className={styles.cardTitle}>BUSINESS SPANISH</h6>
                  <div className={styles.cardTextContainer}>
                    <p className={styles.cardText}>Special program adapted to the needs of those who want to do business in Latin America o with
                        Latin Americans. It includes both the development of specific skills and culture elements to
                        ensure success in business relationships with Hispanic peers.</p>
                  </div>
                </div>
                <button className={`${styles.cardButton} ${styles.secondCardButton}`} onClick={() => handleNavigate('/')}>Read More</button>
            </div>
            <div className={`${styles.thirdCard} ${styles.cards}`}>
                <img className={styles.cardImg} src="assets/img/fotos/estudiante.jpg" alt="photo"/>
                <div className={styles.cardTitleContainer}>
                  <h6 className={styles.cardTitle}>AP SPANISH LANGUAGE AND LITERATURE SPECIAL SUPPORT</h6>
                  <div className={styles.cardTextContainer}>
                    <p className={styles.cardText}>Private tutoring for high school students that need to improve their reading comprehension
                        and writing skills to excel in their Advanced Placement exams. Assistance provided by native
                        Spanish language and literature graduates exclusively.</p>
                  </div>
                </div>
                <button className={`${styles.cardButton} ${styles.thirdCardButton}`} onClick={() => handleNavigate('/')}>Read More</button>
            </div>
        </section>
    </main>
</section>
  )
}
