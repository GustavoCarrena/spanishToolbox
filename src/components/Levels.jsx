import React from 'react';
import styles from './levels.module.scss';

export const Levels = ({text}) => {
    
       
    // const finding = text.map(p=>p).find(p=>p.level === "A1");
    
    // console.log(finding);

    // const finding = () => {
    //     const p = text.map(p=>p)
    // //    const p = text.map(p=>p).find(p=> p.level === level).title
    // //    const titles = p.find(p=> p.level === level).title
    //    return p;
    // };

    // const handlep = (level) =>{

    // }

    // console.log(finding("A2")); 
    
  

    // console.log(filtered.filter('A1'));


      
    return (



            <section className={styles.section}>
        
            <div className={styles.titleContainer}>
                <h6 className={styles.title}>LEVELS</h6>
                <span className={styles.line}></span>
            </div>
    
            <div className={styles.boxContainer}>
                <div className={styles.line}></div>
                    <div  className={styles.circlesContainer}>
                        <div className={`${styles.circles} ${styles.circle1}`}>A1</div>
                    </div>
                    <div className={styles.circlesContainer}>
                        <div className={`${styles.circles} ${styles.circle2}`}>A2</div>
                    </div>
                    <div className={styles.circlesContainer}>
                        <div className={`${styles.circles} ${styles.circle3}`}>B1</div>
                    </div>
                    <div className={styles.circlesContainer}>
                        <div className={`${styles.circles} ${styles.circle4}`}>B2</div>
                    </div>
                    <div className={styles.circlesContainer}>
                        <div className={`${styles.circles} ${styles.circle5}`}>C1</div>
                    </div>
                    <div className={styles.circlesContainer}>
                        <div className={`${styles.circles} ${styles.circle6}`}>C2</div>
                    </div>
            </div>
    
            <div className={styles.textContainer}>
            <div className={styles.largeTextContainer}>
                <div className={styles.titleLargeText}><span className={styles.level}>{text.level}</span>{text.title}</div>
                <div className={styles.textLargeText}>
                    <div className={styles.text}>{text.text1}</div>
                    <div className={styles.text}>{text.text2}</div>
                    <div className={styles.text}>{text.text3}</div>
                </div>
            </div>
            <div className={styles.shortTextContainer}>
                <div className={styles.circleShortTextContainer}>
                    <div className={styles.circleShortText}><span>{text.level}</span></div>
                </div>
                <div className={styles.textShortText}>{text.text4}</div>
            </div>
        </div>
    
                    </section>
      


            )

}
