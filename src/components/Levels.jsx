import React from 'react';
import { useLevels } from '../hooks/useLevels';
import { useSetContents } from '../hooks/useSetContents';
import {MySection,MyOndaHeader, MyTitleContainer} from '../templates/levelsStyles';
import styles from './levels.module.scss';

export const Levels = ({text}) => {

    const { levels,titles,text1,text2,text3,text4,handle, level} = useLevels(text);
    const {screen} = useSetContents();
      
    return (
        <>
            <MyOndaHeader pathlocation={screen} className={styles.ondaHeader}>
                <img className={styles.ondaHeaderImg} src="assets/img/generales/onda-06.svg" alt="onda" />
            </MyOndaHeader>
            
            <MySection pathlocation={screen} className={styles.section}>
            

            <MyTitleContainer pathlocation={screen} className={styles.titleContainer}>
                <h6 className={styles.title}>LEVELS</h6>
                <span className={styles.line}></span>
            </MyTitleContainer>
    
            <div className={styles.boxContainer}>
                <div className={styles.line}></div>
                    <div  className={styles.circlesContainer}>
                        <div onClick={handle.A1} className={`${styles.circles} ${styles.circle1}`}>A1</div>
                    </div>
                    <div className={styles.circlesContainer}>
                        <div onClick={handle.A2} className={(level === 'A2' ||level === 'B1' ||level === 'B2' ||level === 'C1' ||level === 'C2') ? styles.circle1 : `${styles.circles} ${styles.circle2}`}>A2</div>
                    </div>
                    <div className={styles.circlesContainer}>
                        <div onClick={handle.B1} className={(level === 'B1' || level === 'B2' || level === 'C1' || level === 'C2') ? styles.circle1 : `${styles.circles} ${styles.circle3}`}>B1</div>
                    </div>
                    <div className={styles.circlesContainer}>
                        <div onClick={handle.B2} className={(level === 'B2' || level === 'C1' || level === 'C2') ? styles.circle1 :`${styles.circles} ${styles.circle4}`}>B2</div>
                    </div>
                    <div className={styles.circlesContainer}>
                        <div onClick={handle.C1} className={(level === 'C1' || level === 'C2') ? styles.circle1 :`${styles.circles} ${styles.circle5}`}>C1</div>
                    </div>
                    <div className={styles.circlesContainer}>
                        <div onClick={handle.C2} className={(level === 'C2') ? styles.circle1 :`${styles.circles} ${styles.circle6}`}>C2</div>
                    </div>
            </div>
    
            <div className={styles.textContainer}>
            <div className={styles.largeTextContainer}>
                <div className={styles.titleLargeText}><span className={styles.level}>{levels} - </span>{titles}</div>
                <div className={styles.textLargeText}>
                    <div className={styles.text}>{text1}</div>
                    <div className={styles.text}>{text2}</div>
                    <div className={styles.text}>{text3}</div>
                </div>
            </div>
            <div className={styles.shortTextContainer}>
                <div className={styles.circleShortTextContainer}>
                    <div className={styles.circleShortText}><span>{levels}</span></div>
                </div>
                <div className={styles.textShortText}>{text4}</div>
            </div>
        </div>
    
    </MySection>
      
    </>

            )

}
