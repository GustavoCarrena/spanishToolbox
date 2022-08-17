import React, { useState, useEffect } from "react";
import {usePath} from "./usePath";
import styles from '../components/letsLearn.module.scss';

export const useSetContents = () => {
    
    const [enrollTextBtn, setEnrollTextBtn] = useState('');
    const [displayGreenCircle, setdisplayGreenCircle] = useState(null);

    const screen = usePath();

    useEffect(()=>{
        
        switch (screen) {
            
            case '':
                setdisplayGreenCircle(styles.greenCircle);
                break;

            case 'ondemand':
                setEnrollTextBtn('Enroll Now');
                setdisplayGreenCircle(styles.greenCircleNone);
                break;

            case 'language':
                setdisplayGreenCircle(styles.greenCircleNone);
                break;

            case 'about':
                setEnrollTextBtn('Contact Us');
                break;
        }
        
        },[screen])
        
        return {screen, enrollTextBtn, displayGreenCircle};


}
