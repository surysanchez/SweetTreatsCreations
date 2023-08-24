import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import CakesPage from '../CakesPage/CakesPage';
import { treats, cakes } from '../../data.js';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import TreatsPage from '../TreatsPage/TreatsPage';
import TreatDetailPage from '../TreatDetailPage/TreatDetailPage';

export default function App() {
  return (
    <main className="App">
     <>
    <NavBar />
       <Routes>

            <Route path='/cakes' element={ <CakesPage cakes={cakes} />}  >  </Route>  
            <Route path="/treats" element={<TreatsPage treats={treats} />} />
            <Route path="/treats/:treatName" element={<TreatDetailPage treats={treats} />} />

            <Route path="/" element={<HomePage cakes={cakes} treats={treats} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
         
          </Routes>
      
     </>
    </main>
  );
}


