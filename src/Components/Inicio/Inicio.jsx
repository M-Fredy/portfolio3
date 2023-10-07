import React from 'react';
import Foto from './Foto.png';
import './Inicio.css';

const Inicio = () => {
    return (
            <section className='Inicio' id="home">
                <img src={Foto} alt="miImagen" className="Foto"/>
                <div className='titulos'>
                    <h1 className='titulo1'>FREDY M.</h1>
                    <h1 className='titulo2'>Desarrollador Web</h1>
                    <h3 className='titulo3'>con sede en Argentina.</h3>
                    {/* <h3 className='titulo4'>SEE FROTFOLIO</h3> */}
                    <button className="botonSee">VER PORTFOLIO</button>
                </div>
            </section>
    );
}
export default Inicio;