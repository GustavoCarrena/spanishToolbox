import React from 'react';
import styles from './onlineCourses.module.scss';

export const OnlineCourses = () => {
  return (
    <>
    <section className={styles.onlineSection}>
        <div className={styles.textContainer}>
            <h2 className={styles.textHeader}>ONLINE COURSES</h2>
            <p className={styles.text}><span>LEARN SPANISH FROM YOUR
                    HOME</span><span className="second-line"> WITH THE BEST NATIVE TEACHERS</span></p>
        </div>
        <div className={styles.videoContainer}>
            <video className={styles.videoMobile} src="assets/img/video/mobile.mp4" muted loop autoPlay/>
            <video className={styles.videoDesktop} src="assets/img/video/desktop.mp4" muted loop autoPlay/>
            <div className={styles.btnImgContainer}>
                <img className={styles.btnImg} src="/assets/img/generales/onda-05.svg" alt="" />
            </div>
        </div>
    </section>

    </>
)
}
