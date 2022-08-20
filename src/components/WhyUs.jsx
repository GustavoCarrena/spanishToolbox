import React from 'react';
import { useNavigate } from "react-router-dom";
import {usePath} from "../hooks/usePath";
import styles from './whyUs.module.scss';
import {mydiv, mySection, myimg, myfooter, myh6, myOldh6} from "../templates/whyUsStyles";

export const WhyUs = () => {
    
    const screen = usePath();
    
    const MyImg = myimg;
    const MySection = mySection;
    const MyDiv = mydiv;
    const MyOldh6 = myOldh6;
    const Myh6 = myh6;
    const MyFooter = myfooter;



    const navigate = useNavigate();
    const handleNavigate = (url) =>{
        navigate(url)
    };

  
    return (
    
    <div className={styles.generalContainer}>    
    
        <MyImg className={styles.myImg} pathlocation={screen} src="assets/img/generales/onda-06.svg" alt="img" />

        <MySection pathlocation={screen} className={styles.sectionContainer}>
            <MyDiv pathlocation={screen} className={styles.rectangle}>
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
            </MyDiv>
            
            <div  className={styles.titleContainer}>
                <MyOldh6 pathlocation={screen} className={styles.title}>Why us</MyOldh6>
                <Myh6 pathlocation={screen} className={styles.title}>FEATURES</Myh6>
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
            <MyFooter pathlocation={screen} className={styles.btnContainer}>
                <button className={styles.btn} onClick={() => handleNavigate ('/home')} >Read More</button>
            </MyFooter>
        </MySection>
    </div>
  )
}
