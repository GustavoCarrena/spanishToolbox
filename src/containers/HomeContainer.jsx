import React from 'react';
import { Hero } from '../components/Hero';
import { LetsLearn } from '../components/LetsLearn';
import { OndemandCourses } from '../components/OndemandCourses';
import { OnlineCourses } from '../components/OnlineCourses';

export const HomeContainer = () => {
  return (
    <>
      <Hero/>
      <LetsLearn/>
      <OnlineCourses/>
      <OndemandCourses/>
    </>
  )
}
