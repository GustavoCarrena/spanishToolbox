import React, { useState, useEffect } from "react";
import { usePath } from "./usePath";
import styles from '../components/letsLearn.module.scss';
import { useMemo } from "react";


export const useSetContents = () => {

    const [enrollTextBtn, setEnrollTextBtn] = useState('');
    const [displayGreenCircle, setdisplayGreenCircle] = useState(null);


    const screen = usePath();

    const greenCircleSrc = "assets/img/hero/hero-_circ-verde.svg";

    const showCircle = useMemo(() => {
        return screen === 'home'
    }, [screen]);


    useEffect(() => {

        switch (screen) {

            case 'home':
                setdisplayGreenCircle(styles.greenCircle);
                break;

            case 'ondemand':
                setEnrollTextBtn('Enroll Now');
                break;

            case 'language':
                setEnrollTextBtn('Enroll Now');
                break;

            case 'about':
                setEnrollTextBtn('Contact Us');
                break;

            case 'regular':
                setEnrollTextBtn('Enroll Now');
                break;

            case 'history':
                setEnrollTextBtn('Enroll Now');
                break;
        }

    }, [screen])

    return { screen, enrollTextBtn, displayGreenCircle, greenCircleSrc, showCircle };


}