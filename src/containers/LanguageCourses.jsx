import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EnrollNow } from '../components/EnrollNow.jsx';
import {LetsLearn} from '../components/LetsLearn.jsx';
import { Levels } from '../components/Levels.jsx';
import { TestLevel } from '../components/TestLevel.jsx';
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
        <TestLevel/>
        <EnrollNow/>
      </div>
    </section>
  )
}
