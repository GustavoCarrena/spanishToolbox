import React, { useState, useEffect } from "react";
import {usePath} from "./usePath";

export const useSetContents = () => {
    
    const [enrollNowContent, setEnrollNowContent] = useState('');
    const [displayGreenCircle, setDisplayGreenCircle] = useState(null);
    const [srcGreenCircle, setSrcGreenCircle] = useState(null);
    const screen = usePath();
    

    useEffect(()=>{

        switch (screen) {
            
            case (''):
                setSrcGreenCircle("assets/img/hero/hero-_circ-verde.svg");
                setDisplayGreenCircle(styles.greenCircle);
                break
            
            case 'language':
                setDisplayGreenCircle(styles.greenCircleNone);
                break;
            
            case 'ondemand':
                setEnrollNowContent('Enroll Now');
                setDisplayGreenCircle(styles.greenCircleNone);
                break;
        
                case 'about':
                    setEnrollNowContent('Contact Us')
                break;
        }

    },[screen])

    return {screen,enrollNowContent,displayGreenCircle, srcGreenCircle}

}
