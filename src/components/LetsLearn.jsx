import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Myimg,Myh1, Myh1Language, TextContainer, TextContainerShort ,FirstTitle, SecondTitle, ThirdTitle, SecondButton, ThirdButton} from "../templates/letsLearnStyles";
import {firstCard,secondCard,thirdCard,changeSectionTitle, changeCardImg, changeCardTitle, changeCardText} from '../helpers/letsLearnText';
import {useSetContents} from "../hooks/useSetContents";
import styles from './letsLearn.module.scss';


export const LetsLearn = () => {
    
    const {screen, greenCircleSrc, showCircle} = useSetContents();
    
    const navigate = useNavigate();
    const handleNavigate = (route) =>{
        navigate(route)
    };

    return (
        
        <>
            
        <section className={styles.letsLearnContainer}>

            {
                (showCircle) &&
                <img pathlocation={screen} className={styles.greenCircle} src={greenCircleSrc} alt="green circle"/>

            }


            <header className={styles.headerContainer}>
                
                <Myh1Language pathlocation={screen}>
                    <span className='title'>{changeSectionTitle(screen)}</span>
                    <span className='line'></span>
                </Myh1Language>
                
                <Myh1 pathlocation={screen} className={styles.titleH1}>                    
                    <span className={styles.firstLine}>LET´S LEARN</span>
                    <span className={styles.secondLine}>SPANISH!</span>
                    <span className={styles.thirdLine}>Online. Professional. Simple</span>
                </Myh1>
            </header>

            <main className={styles.mainContainer}>
                <div className={styles.cards}>
                    <div className={styles.imgContainer}>
                        <img className={styles.img} src={changeCardImg(screen, firstCard)} alt="photo"/>
                    </div>
                    
                    <div className={styles.titleContainer}>
                        <FirstTitle pathlocation={screen}  className={`${styles.firstCardTitle} ${styles.title}`}>{changeCardTitle(screen, firstCard)}</FirstTitle>
                    </div>
                    
                    <TextContainerShort pathlocation={screen} className={styles.textContainer}>
                        <p className={`${styles.firstCardText} ${styles.text}`}>{changeCardText(screen, firstCard)}</p>
                    </TextContainerShort>
                    <button className={`${styles.firstCardButton} ${styles.btn}`} onClick={() => handleNavigate('/home')}>Read More</button>
                </div>
                <div className={styles.cards}>
                    <div className={styles.imgContainer}>
                        <img className={styles.img} src={changeCardImg(screen, secondCard)} alt="photo"/>
                    </div>
                    <div className={styles.titleContainer}>
                        <SecondTitle pathlocation={screen} className={`${styles.secondCardTitle} ${styles.title}`}>{changeCardTitle(screen, secondCard)}</SecondTitle>
                    </div>
                    <TextContainerShort pathlocation={screen} className={styles.textContainer}>
                        <p className={`${styles.secondCardText} ${styles.text}`}>{changeCardText(screen, secondCard)}</p>
                    </TextContainerShort>
                    <SecondButton pathlocation={screen} className={`${styles.secondCardButton} ${styles.btn}`} onClick={() => handleNavigate('/home')}>Read More</SecondButton>
                </div>
                <div className={styles.cards}>
                    <div className={styles.imgContainer}>
                        <img className={styles.img} src={changeCardImg(screen, thirdCard)} alt="photo"/>
                    </div>
                    <div className={styles.titleContainer}>
                        <ThirdTitle pathlocation={screen} className={`${styles.thirdCardTitle}  ${styles.title}`}>{changeCardTitle(screen, thirdCard)}</ThirdTitle>
                    </div>
                    <TextContainer pathlocation={screen} className={styles.textContainer}>
                        <p className={`${styles.thirdCardText} ${styles.text}`}>{changeCardText(screen, thirdCard)}</p>
                    </TextContainer>
                    <ThirdButton pathlocation={screen} className={`${styles.thirdCardButton} ${styles.btn}`} onClick={() => handleNavigate('/home')}>Read More</ThirdButton>
                </div>
                    <Myimg pathlocation={screen} className={styles.yellowCircle} src="assets/img/hero/hero-circ-amarillo.svg" alt="circle image"/>
            </main>
        </section>
        </>
  )
}
