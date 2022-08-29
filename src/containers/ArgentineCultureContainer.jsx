import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OurTeachers } from '../components/OurTeachers';
import { WhyUs } from '../components/WhyUs';
import { animateScroll as scroll} from 'react-scroll';
import styles from './argentineCultureContainer.module.scss';

export const ArgentineCultureContainer = () => {

    const navigate = useNavigate();
    const handleToHome = () => {
        navigate('/language');
        scroll.scrollToTop();
    }
    const handleToHistory = () => {
        navigate('/history');
        scroll.scrollToTop();
    };

    return (
        <section className={styles.ArgentineCultureSection}>

            <div className={styles.container}>

                <div className={styles.toHomeContainer}>
                    <span onClick={handleToHome} className={styles.toHome}></span>
                    <span className={styles.actualPage}>Argentine Culture Courses</span>
                </div>

                <div className={styles.titleContainer}>
                    <div className={styles.title}>ARGENTINE CULTURE COURSES</div>
                    <span className={styles.titleUnderline}></span>
                </div>

                <div className={styles.cardsMobile}>
                    <img className={styles.cardsImg} src="assets/img/argentine/billetes.png" alt="image" />
                    <div className={styles.cardsTitleContainer}>
                        <span className={styles.cardsTitle}>ECONOMY</span>
                        <div className={styles.cardsText}>
                            <div className={`${styles.cardsTextFirst} ${styles.cardsTextText}`}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            </div>
                            <div className={`${styles.cardsTextsecond} ${styles.cardsTextText}`}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </div>
                    <button className={styles.cardFirstBtn}>Read More</button>
                </div>

                <div className={styles.cardsMobile}>
                    <img className={styles.cardsImg} src="assets/img/argentine/libros.png" alt="image" />
                    <div className={styles.cardsTitleContainer}>
                        <span className={styles.cardsTitle}>HISTORY</span>
                        <div className={styles.cardsText}>
                            <div className={`${styles.cardsTextFirst} ${styles.cardsTextText}`}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            </div>
                            <div className={`${styles.cardsTextsecond} ${styles.cardsTextText}`}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </div>
                    <button className={styles.cardSecondBtn} onClick={handleToHistory}>Read More</button>
                </div>

                <div className={styles.cardsMobile}>
                    <img className={styles.cardsImg} src="assets/img/argentine/mate.png" alt="image" />
                    <div className={styles.cardsTitleContainer}>
                        <span className={styles.cardsTitle}>HISTORY & CULTURE</span>
                        <div className={styles.cardsText}>
                            <div className={styles.cardsTextFirst}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            </div>
                            <div className={styles.cardsTextsecond}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </div>
                    <button className={styles.cardThirdBtn}>Read More</button>
                </div>

                <div className={`${styles.cardDesktop} ${styles.firstThirdCardDesktop}`}>
                    <div className={styles.cardsTitleContainer}>
                        <span className={styles.cardsTitle}>ECONOMY</span>
                        <div className={styles.cardsText}>
                            <div className={`${styles.cardsTextFirst} ${styles.cardsTextDesktop}`}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            </div>
                            <div className={`${styles.cardsTextsecond} ${styles.cardsTextDesktop}`}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                        <button className={styles.cardFirstBtn}>Read More</button>
                    </div>
                    <img className={styles.cardsDesktopImg} src="assets/img/argentine/billetes.png" alt="image" />

                </div>

                <div className={`${styles.cardDesktop} ${styles.secondCardDesktop}`}>
                    <img className={styles.cardsDesktopImg} src="assets/img/argentine/libros.png" alt="image" />
                    <div className={styles.cardsTitleContainer}>
                        <span className={styles.cardsTitle}>HISTORY</span>
                        <div className={styles.cardsText}>
                            <div className={`${styles.cardsTextFirst} ${styles.cardsTextDesktop}`}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            </div>
                            <div className={`${styles.cardsTextsecond} ${styles.cardsTextDesktop}`}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                        <button className={styles.cardSecondBtn} onClick={handleToHistory} >Read More</button>
                    </div>
                </div>

                <div className={`${styles.cardDesktop} ${styles.firstThirdCardDesktop}`}>
                <div className={styles.cardsTitleContainer}>
                        <span className={styles.cardsTitle}>HISTORY & CULTURE</span>
                        <div className={styles.cardsText}>
                            <div className={`${styles.cardsTextFirst} ${styles.cardsTextDesktop}`}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            </div>
                            <div className={`${styles.cardsTextsecond} ${styles.cardsTextDesktop}`}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                        <button className={styles.cardThirdBtn}>Read More</button>
                    </div>
                    <img className={styles.cardsDesktopImg} src="assets/img/argentine/mate.png" alt="image" />

                </div>

            </div>
            
            <WhyUs/>
            <OurTeachers/>

        </section>
    )
}
