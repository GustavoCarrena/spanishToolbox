import React from 'react';
import { useNavigate } from 'react-router-dom';
import {LetsLearn} from '../components/LetsLearn.jsx';
import { Levels } from '../components/Levels.jsx';
import { WhyUs } from '../components/WhyUs.jsx';
import {levelsText} from '../helpers/levelsText';
import styles from './languageCourses.module.scss';


export const LanguageCourses = () => {
  
  const text = levelsText();
  
  const navigate = useNavigate();
  const handleToHome = () =>{
    navigate('/');
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.toHomeContainer}>
          <span onClick={handleToHome} className={styles.toHome}></span>
          <span className={styles.actualPage}>Language Courses</span>
        </div>
        <LetsLearn/>
        <WhyUs/>
        <Levels text={text}/>
      </div>
    </section>
  )
}
