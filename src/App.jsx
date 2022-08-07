import React from 'react';
import  ReactDOM  from "react-dom/client";
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import { Header } from '../src/components/Header';
import { Footer } from './components/Footer';
import { HomeContainer } from './containers/HomeContainer';


export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeContainer/>}/>
        <Route path="/*" element={<HomeContainer />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
