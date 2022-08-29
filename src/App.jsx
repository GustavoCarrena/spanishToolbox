import React from 'react';
import {  BrowserRouter,  Routes,  Route, Navigate} from "react-router-dom";
import { Header } from '../src/components/Header';
import { Footer } from './components/Footer';
import { Ondemandcontainer } from './containers/Ondemandcontainer';
import { HomeContainer } from './containers/HomeContainer';
import { LanguageCourses } from './containers/LanguageCourses';
import { AboutUsContainer } from './containers/AboutUsContainer';
import { ContactContainer } from './containers/ContactContainer';
import { RegularSpanishCourses } from './containers/RegularSpanishCourses';
import { ArgentineCultureContainer } from './containers/ArgentineCultureContainer';
import { HistoryCourseContainer } from './containers/HistoryCourseContainer';

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Navigate to="/home" replace />}/>
        <Route path="/home" element={<HomeContainer/>}/>
        <Route path="/language" element={<LanguageCourses/>}/>
        <Route path="/ondemand" element={<Ondemandcontainer/>}/>
        <Route path="/about" element={<AboutUsContainer/>}/>
        <Route path="/contact" element={<ContactContainer/>}/>
        <Route path="/regular" element={<RegularSpanishCourses/>}/>
        <Route path="/argentine" element={<ArgentineCultureContainer/>}/>
        <Route path="/history" element={<HistoryCourseContainer/>}/>
        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
