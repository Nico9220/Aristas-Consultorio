import React from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Nosotros from './Components/Nosotros';
import Tratamientos from './Components/Tratamientos';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <section >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Nosotros" element={<Nosotros />} />
            <Route exact path="/Tratamientos" element={<Tratamientos />} />
            <Route exact path="/Contacto" element={<Contacto />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </section>
    </>
  );
}
