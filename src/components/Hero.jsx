import React from "react";
import { useEffect } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import styles from "./hero.module.scss";

export const Hero = () => {
  
  const { width } = useWindowDimensions();

  return (
    <section className={styles.heroContainer}>
      
      <div className={styles.leftBookcaseContainer}>
        <img
          className={styles.leftBookcaseImg}
          id="leftBookcase" 
          src="/assets/img/hero/hero_biblio-1-ss.svg"
          alt="bookcase"
        />
      </div>

    <div className={styles.mainAreaContainer}>
        
        <header className={styles.calendarWatchContainer}>
            <div className={styles.calendarContainer}>
                <img className={styles.calendarImg} id={width >= 992 ? "calendar" : ''} src="/assets/img/hero/hero_calendario-ss.svg" alt="calendar image"/>
            </div>
            <div className={styles.watchContainer}>
                <img className={styles.watchImg} id={width >= 992 ? "watch" : ''} src="/assets/img/hero/hero_reloj-ss.svg" alt="watch image"/>
            </div>
        </header>
        
        <main className={styles.deskContainer}>
          
          <img className={styles.deskMobileImg} id="mobileDesk" src="/assets/img/hero/hero_escritorio_mobile.svg" alt="desk image"/>
          
          <div className={styles.effectContainer}>
            
            <div className={styles.helloScreenDeskContainer}>
                <div className={styles.hello}>
                    <img className={styles.helloImg} id="hello_msg" src="/assets/img/hero/hero_hola.svg" alt="hello image"/>
                </div>
                
                <div className={styles.screen}>
                    <img className={styles.screenImg} id="screen" src="/assets/img/hero/hero_pantalla.svg" alt="screen image"/>
                </div>

                <div className={styles.desk}>
                <img className={styles.deskImg} id="desk" src="/assets/img/hero/hero_escritorio_2.svg" alt="desk image"/>
              </div>
            </div>

            <div className={styles.appleLampContainer}>
              <div className={styles.apple}>
                  <img className={styles.appleImg} id="apple" src="/assets/img/hero/hero_manzana.svg" alt="apple image"/>
              </div>
            
              <div className={styles.lamp}>
                  <img className={styles.lampImg} id="lamp" src="/assets/img/hero/hero_lampara.svg" alt="lamp image"/>
              </div>
            </div>

          </div>


       </main>
    </div>

    <div className={styles.rightBookcaseContainer}>
        <img 
            className={styles.rightBookcaseImg} 
            id="rightBookcase" 
            src="/assets/img/hero/hero_biblio-2-ss.svg" 
            alt="bookcase image"/>
    </div>
    <div className={styles.whiteTop}>
            <img className={styles.whiteTopImg} src="/assets/img/hero/hero_curva-blanca.svg" alt="" preserveAspectRatio="none"/>
    </div>
    <img src="/assets/img/hero/hero_circ-violeta.svg" alt="circle image" className={styles.violetCircle}/>
  </section>
  );
};
