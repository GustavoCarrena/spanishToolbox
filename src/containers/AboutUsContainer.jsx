import React from 'react';
import { EnrollNow } from '../components/EnrollNow';
import styles from './aboutUsContainer.module.scss';

export const AboutUsContainer = () => {
  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.aboutUsContent}>
        
        <header className={styles.aboutUsHeader}>
            <div className={styles.headerImgContainer}>
              <img className={styles.headerImg} src="assets/img/aboutUs/primera-provisoria.jpg" alt="image" />
            </div>
            <div className={styles.headerTextContainer}>
                <p className={styles.headerTitle}>ABOUT US</p>
                <div className={styles.headerTextContainer}>
                    <p className={`${styles.text} ${styles.text1}`}>
                      The Spanish Toolbox is an online learning website designed to immerse students in an all-new language acquisition experience. Conscious of the obstacles that often discourage those who want to practice a new language, our team of young professionals has undertaken thorough research to bring the unlimited potential of online learning to your screen. 
                    </p>
                    <p className={`${styles.text} ${styles.text2}`}>
                      Our hands-on approach is designed to meet your communicational needs and proposes to get you speaking from the very first class. With the assessment and support of our all-native teaching staff, we hope to provide a more thorough understanding of Spanish and encourage you to engage in conversation with other speakers. For those hoping to achieve other goals, tailor-made courses are also readily available.
                    </p>
                </div>
            </div>

        </header>

        <div className={styles.aboutUsRocketContainer}>
            <img className={styles.aboutUsRocketImg} src="assets/img/aboutUs/cohete-provisoria.jpg" alt="image" />
        </div>
        
        <main className={styles.aboutUsMain}>
          <div className={styles.aboutUsLeftCircleContainer}>
              <img className={styles.aboutUsLeftCircleImg} src="assets/img/aboutUs/circulo-azul-provisoria.jpg" alt="image" />
          </div>
          <div className={styles.aboutUsMainTextContainer}>
              <p className={styles.aboutUsMainText}>
                Our proposal is based on exploiting the Internet’s vast and powerful resources to take the learning experience to a whole new level to make Spanish classes available everywhere. Regardless of whether you live in Nairobi or Hong Kong, can study in the morning or late at night, The Spanish Toolbox intends to make language and culture classes <span className={styles.underlineText}>available for everyone everywhere</span>.
              </p>
              <div className={styles.aboutUsMainTextLine}></div>
          </div>
          <div className={styles.aboutUsRightCircleContainer}>
              <img className={styles.aboutUsRightCircleImg} src="assets/img/aboutUs/circulo-verde-provisoria.jpg" alt="image" />
          </div>

        </main>

        <footer className={styles.aboutUsFooter}>
          <div className={styles.aboutUsFooterCard}>
              <img className={styles.cardImg} src="assets/img/aboutUs/manzana-provisoria.jpg" alt="image" />
              <h6 className={styles.cardTitle}>DIGITAL CLASSROOM</h6>
              <p className={styles.cardText}>All our content has been specifically designed for a digital environment in order to provide an interactive learning experience.</p>
          </div>
          <div className={styles.aboutUsFooterCard}>
              <img className={styles.cardImg} src="assets/img/fotos/clase-online.jpg" alt="image" />
              <h6 className={styles.cardTitle}>ONLINE TEACHING</h6>
              <p className={styles.cardText}>Our teachers have been trained to guide you through the learning process and make your online experience accessible, enjoyable, and enriching.</p>
          </div>
          <div className={styles.aboutUsFooterCard}>
              <img className={styles.cardImg} src="assets/img/aboutUs/cowboy-provisoria.jpg" alt="image" />
              <h6 className={styles.cardTitle}>YOU CAN LEARN AT YOUR OWN PACE</h6>
              <p className={styles.cardText}>You can learn at your own pace: Individual courses allow you to be in control of when you learn, review, and practice. Contact us for more information on how to shape your own learning experience.</p>
          </div>
        </footer>
      </div>
      <EnrollNow/>
    </section>
  )
}
