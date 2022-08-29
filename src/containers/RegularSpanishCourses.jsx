import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EnrollNow } from '../components/EnrollNow';
import { Levels } from '../components/Levels';
import { levelsText } from '../helpers/levelsText';
import { animateScroll as scroll} from 'react-scroll';

import styles from './regularSpanishCourses.module.scss';

export const RegularSpanishCourses = () => {

  const navigate = useNavigate();
  const handleToHome = () => {
    navigate('/language');
    scroll.scrollToTop();
  }

  const text = levelsText();

  return (

    <>

      <section className={styles.regularCoursesSection}>
        <div className={styles.container}>

          <div className={styles.toHomeContainer}>
            <span onClick={handleToHome} className={styles.toHome}></span>
            <span className={styles.actualPage}>Regular Spanish Courses</span>
          </div>

          <div className={styles.titleContainer}>
            <div className={styles.title}>REGULAR SPANISH COURSES</div>
          </div>

          <div className={`${styles.cardContainer} ${styles.firstCardContainer} `}>

            <div className={styles.boxGeneralContainer}>
              <div className={styles.boxContainer}>
                <div className={`${styles.logoContainer}`}>
                  <img className={styles.logo} src="/assets/img/regular/schedule.svg" alt="schedule" />
                  <p className={styles.textLogo}>SCHEDULE</p>
                </div>
                <div className={styles.textContainer}>
                  <p className={styles.text}>To be convened with our coordinator. As long as your teacher’s available, we’re always ready to boost your learning process!</p>
                </div>
              </div>

              <div className={styles.boxContainer}>
                <div className={`${styles.logoContainer}`}>
                  <img className={styles.logo} src="/assets/img/regular/content.svg" alt="schedule" />
                  <p className={styles.textLogo}>CONTENT</p>
                </div>
                <div className={styles.textContainer}>
                  <p className={styles.text}>What you see in class will depend on your level of expertise. Our regular courses come with preset content designed by our academic staff and designers according to the guidelines of the Instituto Cervantes, the most reputed Spanish language entity.</p>
                </div>
              </div>

              <div className={styles.boxContainer}>
                <div className={`${styles.logoContainer}`}>
                  <img className={styles.logo} src="/assets/img/regular/level.svg" alt="schedule" />
                  <p className={styles.textLogo}>LEVEL</p>
                </div>
                <div className={styles.textContainer}>
                  <p className={`${styles.text} ${styles.textLink} `}>We organize our courses according to the Common European Framework of Reference for Languages, which divides the learning process of Spanish into six levels. Scroll down to see their description or
                    <a href='#site' className={styles.textLink}>click here</a></p>
                </div>
              </div>
            
            </div>

            <div className={styles.photoFirstContainer}>
              <img className={styles.photoFirst} src="assets/img/fotos/AdobeStock_158540061.jpg" alt="photo" />
              <button className={styles.btnFirst}>Enroll Now</button>
            </div>

          </div>

          <div className={styles.photoContainer}>
            <img className={styles.photo} src="assets/img/fotos/AdobeStock_158540061.jpg" alt="photo" />
            <button className={styles.btn}>Enroll Now</button>
          </div>

          <div className={styles.secondCard}>
            <div className={styles.textSecondCardContainer}>
              <div className={styles.titleSecondCardContainer}>
                <p className={styles.titleSecondCard}>ABOUT THE COURSE</p>
              </div>
              <div className={styles.textSecondCardContainer}>
                <div className={styles.firstText}>
                  <span className={styles.firstTextColor}>The Experience: </span><span className={styles.firstTextText}>All our classes take place online on Zoom. Additionally, the Google Classroom platform is used. The courses are structured by a textbook and interactive class material to enhance our students’ abilities.</span>
                </div>
                <div className={styles.secondText}>
                  <span className={styles.secondTextColor}>About our teaching staff: </span><span className={styles.secondTextText}>All of our Spanish language professionals are native speakers with teaching experience. They live in different parts of Latin America and are therefore always in contact with the language.</span>
                </div>
              </div>
            </div>
            <div className={styles.imgSecondCardContainer}>
              <img className={styles.imgSecondCard} src="assets/img/fotos/clase-online.jpg" alt="photo" />
            </div>
          </div>

          <div className={styles.thirdCard}>
            <div className={styles.imgThirdCardContainer}>
              <img className={styles.imgThirdCard} src="assets/img/regular/about.png" alt="photo" />
            </div>
            <div className={styles.thirdCardContainer}>
              <div className={styles.titleThirdCardContainer}>
                <p className={styles.titleThirdCard}>METHODOLOGY</p>
              </div>
              <div className={styles.textThirdCardContainer}>
                <div className={styles.thirdCardText}>
                  <span className={styles.thirdCardText}>Our students begin to develop all four main language skills from the very first class. That is, reading, writing, listening, and speaking. Our main focus is on the communicative approach. We teach meaningful language, not language with meaning. Instead of being passive listeners or observers, we encourage our students to participate in class and use Spanish as much as possible. The class environment is there to help you use in the real world all the Spanish you learn with us.</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.classMaterialContainer}>
            <div className={styles.classMaterialTitleContainer}>
              <img className={styles.classMaterialImg} src="assets/img/regular/material.svg" alt="logo" />
              <div className={styles.classMaterialTitleC}>
                <span className={styles.classMaterialTitle}>CLASS MATERIAL</span>
              </div>
            </div>
            <div className={styles.classMaterialItemsContainer}>
              <span className={styles.classMaterialFirstItem}>Class textbook you can order <Link to={'/'} className={styles.fromHere}>from here</Link></span>
              <span className={styles.classMaterialSecondItem}>Interactive class material designed by your staff</span>
            </div>
          </div>
        </div>


      </section>
      <span id='site' style={{visibility:'hidden'}}></span>
      <Levels text={text} />
      <EnrollNow/>
    </>
  )
}
