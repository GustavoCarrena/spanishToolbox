import React from 'react';
import {usePath} from "../hooks/usePath";
import {Mydiv, Myimg, Mycontent, Mysection,Mycontainer, Mytestscontainer,Mytext, MyTitleContainer,MyArrowContainer} from '../templates/testLevelStyles';
import styles from './testLevel.module.scss';

export const TestLevel = () => {
  
    const screen = usePath();

    return (
        <Mysection pathlocation={screen} className={styles.sectionContainer}>
            
            <Mydiv pathlocation={screen} className={styles.firstContainer}>
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
            </Mydiv>

            <Mycontainer pathlocation={screen} className={styles.secondContainer}>
                <Mytestscontainer pathlocation={screen} className={styles.testLevelsContainer}>
                    <Myimg pathlocation={screen} className={styles.testLevelsImg} src="assets/img/fotos/AdobeStock_103519056.jpg" alt="photo"/>
                    <Mycontent pathlocation={screen} className={styles.testYourLevel}>
                        <MyTitleContainer pathlocation={screen} className={styles.titleContainer}>
                            <img className={styles.titleImg} src="/assets/img/fotos/test.svg" alt="photo" />
                        </MyTitleContainer>
                        <Mytext pathlocation={screen} className={styles.testYourLevelText}>Help us offer you the course that best meets your needs. If you have prior
                            knowledge, took some hours of Spanish classNamees in the past, or can conjugate irregular
                            subjunctive verbs like a rockstar, take our leveling test.</Mytext>
                        <button className={styles.testYourLevelBtn} href="levels_information.html">Test Now!</button>
                    </Mycontent>
                </Mytestscontainer>
                <MyArrowContainer pathlocation={screen} className={styles.arrowContainer}>
                    <img className={styles.arrow} src="assets/img/hero/hero_flecha.svg" alt="arrow-image"/>
                </MyArrowContainer>
            </Mycontainer>
  
    </Mysection>
  )
}
