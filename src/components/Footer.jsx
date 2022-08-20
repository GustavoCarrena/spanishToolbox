import React from 'react';
import { Link } from "react-router-dom";
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    
    <section className={styles.sectionContainer}>
    
        <main className={styles.main}>
            
            <img className={styles.mainLogo} src="assets/img/generales/elementos-01.svg" alt="image"/>
            
            <div className={styles.mainContent}>
                <div className={styles.mainContentLogoContainer}>
                    <div className={styles.logo}>
                        <img className={styles.mainContentLogoImg} src="assets/img/logo/logo.svg" alt="logo"/>
                        <span className={styles.mainContentLogoTitle}>The Spanish Toolbox</span>
                    </div>
                    <p className={styles.mainContentLogoText}>We teach meaningful language, not language with meaning</p>
                </div>
                <ul className={styles.linkContainer}>
                    <Link className={styles.link} to={'/home'}>About Us</Link>
                    <Link className={styles.link} to={'/home'}>Contact Us</Link>
                    <Link className={styles.link} to={'/home'}>FAQ's</Link>
                </ul>
            </div>

            <div className={styles.languageCourses}>
                <h6 className={styles.title}>Language Courses</h6>
                <div className={styles.contentContainer}>
                    <p className={styles.content}>Regular Spanish Courses</p>
                    <p className={styles.content}>Tailor-Made Spanish Courses</p>
                    <p className={styles.content}>Conversations Workshops</p>
                </div>
            </div>

            <div className={styles.specialCourses}>
                <h6 className={styles.title}>Special Courses</h6>
                <div className={styles.contentContainer}>
                    <p className={styles.content}>Argentina Culture Courses</p>
                    <p className={styles.content}>Business Spanish</p>
                    <p className={styles.content}>AP Spanish Language and Literature special support</p>
                </div>
            </div>

        </main>

        <footer className={styles.footer}>
            
            <div className={styles.allRightsReserved}>
                <span>© 2022 The Spanish Toolbox.</span>
                <span>All Rights Reserved.</span>
            </div>
            
            <div className={styles.socialMedia}>
                <img className={styles.socialMediaIcon} src="assets/img/footer/iconos_instagram.svg" alt="image" />
                <img className={styles.socialMediaIcon} src="assets/img/footer/iconos_linkedin.svg" alt="image" />
                <img className={styles.socialMediaIcon} src="assets/img/footer/iconos_messenger.svg" alt="image" />
                <img className={styles.socialMediaIcon} src="assets/img/footer/iconos_correo.svg" alt="image" />
            </div>
            
            <div className={styles.termsContainer}>
                <span className={styles.privacy}>Privacy Policy</span>
                <span className={styles.privacy}>Terms of Service</span>
            </div>
        
        </footer>

    </section>
  )
}
