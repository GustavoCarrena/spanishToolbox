import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EnrollNow } from '../components/EnrollNow';
import { LetsLearn } from "../components/LetsLearn";
import { WhyUs } from '../components/WhyUs';
import styles from './ondemandCoursesContainer.module.scss';


export const Ondemandcontainer = () => {
  
  const navigate = useNavigate();
  
  const handleToHome = () =>{
    navigate('/home');
  }
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.toHomeContainer}>
          <span onClick={handleToHome} className={styles.toHome}></span>
          <span className={styles.actualPage}>On-Demand Courses</span>
        </div>
        <LetsLearn/>
        <WhyUs/>
        <EnrollNow/>
      </div>
    </section>
  )
}
