import React from 'react';
import Header from './Components/Header/Header';
import Inicio from './Components/Inicio/Inicio'
import SobreMi from './Components/SobreMi/SobreMi';
import Services from './Components/Services/Services';
import TrabajosRecientes from './Components/TrabajosRecientes/TrabajosRecientes';
import Footer from './Components/Footer/Footer';
import Contactos from './Components/Contactos/Contactos';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Inicio/>
      <SobreMi/>
      <Services/>
      <TrabajosRecientes/>
      <Contactos />
      <Footer/>
    </div>
  );
}

export default App;
