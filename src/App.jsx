import React from 'react';
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import { Header } from '../src/components/Header';
import { Footer } from './components/Footer';
import { Ondemandcontainer } from './containers/Ondemandcontainer';
import { HomeContainer } from './containers/HomeContainer';
import { LanguageCourses } from './containers/LanguageCourses';
import { AboutUsContainer } from './containers/AboutUsContainer';
import { ContactContainer } from './containers/ContactContainer';

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/home" element={<HomeContainer/>}/>
        <Route path="/language" element={<LanguageCourses/>}/>
        <Route path="/ondemand" element={<Ondemandcontainer/>}/>
        <Route path="/about" element={<AboutUsContainer/>}/>
        <Route path="/contact" element={<ContactContainer/>}/>
        <Route path="/*" element={<HomeContainer />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
