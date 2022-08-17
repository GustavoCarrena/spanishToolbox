// import {screen, enrollNowContent} from '../hooks/useSetContents';
import React, {useEffect, useState} from 'react';
import {usePath} from "../hooks/usePath";
import {MySection} from "../templates/enrollNowStyles";

import styles from './enrollnow.module.scss';

export const EnrollNow = () => {
    
    const [enrollNowContent, setEnrollNowContent] = useState('');
    const screen = usePath();

    useEffect(()=>{

        switch (screen) {
            
            case 'ondemand':
                    setEnrollNowContent('Enroll Now');
                break;
        
                case 'about':
                    setEnrollNowContent('Contact Us')
                break;
        }

    },[screen])

    return (
        
        <MySection pathlocation={screen} className={styles.section}>
            
            <div className={styles.btnContainer}>
                <button className={styles.btn}>{enrollNowContent}</button>
            </div>

            <div className={styles.imgContainer}>
                <div className={styles.papers}>
                    <img className={styles.large} src="assets/img/hero/post-it.svg" alt="paper" />
                    <img className={styles.small} src="assets/img/hero/post-it.svg" alt="paper" />
                </div>
                <div className={styles.lampContainer}>
                    <img className={styles.lamp} src="assets/img/hero/lampara.svg" alt="lamp" />
                </div>
            </div>
        
        </MySection>
  )
}
