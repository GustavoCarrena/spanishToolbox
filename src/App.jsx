import React from 'react';
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import { Header } from '../src/components/Header';
import { Footer } from './components/Footer';
import { OnDemandCoursesContainer } from './containers/OnDemandCoursesContainer';
import { HomeContainer } from './containers/HomeContainer';
import { LanguageCourses } from './containers/LanguageCourses';

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeContainer/>}/>
        <Route path="/language" element={<LanguageCourses/>}/>
        <Route path="/ondemand" element={<OnDemandCoursesContainer/>}/>
        <Route path="/*" element={<HomeContainer />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
