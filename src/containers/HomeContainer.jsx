import React from 'react';
import { Hero } from '../components/Hero';
import { LetsLearn } from '../components/LetsLearn';
import { NewsLetter } from '../components/NewsLetter';
import { OndemandCourses } from '../components/OndemandCourses';
import { OnlineCourses } from '../components/OnlineCourses';
import { TestLevel } from '../components/TestLevel';
import { WhyUs } from '../components/WhyUs';

export const HomeContainer = () => {
  return (
    <>
      <Hero/>
      <LetsLearn/>
      <OnlineCourses/>
      <OndemandCourses/>
      <WhyUs/>
      <TestLevel/>
      <NewsLetter/>
    </>
  )
}
