import './Services.css';
import React, { Fragment } from 'react';
import icono1 from './icono1.png';
import icono2 from './icono2.png';
import icono3 from './icono3.png';
import icono4 from './icono4.png';
import icono5 from './icono5.png';
import icono6 from './icono6.png';

const Services = () => {
    return (
        <Fragment>
            <section className='Servicios'>
                <div className='tituloSeccion' ><h1>Servicios</h1>
                </div>
                <div className='cajaServicios'>
                    <div className='caja'>
                        <img src={icono1} alt="icono1" />
                        <h2 className="titulo">Diseño</h2>
                        <p className="parrafo">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='caja'>
                        <img src={icono2} alt="icono2" />
                        <h2 className="titulo">Desarrollo</h2>
                        <p className="parrafo">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='caja'>
                        <img src={icono3} alt="icono3" />
                        <h2 className="titulo">Gráfica</h2>
                        <p className="parrafo">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='caja'>
                        <img src={icono4} alt="icono4" />
                        <h2 className="titulo">Marca</h2>
                        <p className="parrafo">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='caja'>
                        <img src={icono5} alt="icono5" />
                        <h2 className="titulo">Fotografía</h2>
                        <p className="parrafo">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='caja'>
                        <img src={icono6} alt="icono6" />
                        <h2 className="titulo">Soporte</h2>
                        <p className="parrafo">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default Services 
