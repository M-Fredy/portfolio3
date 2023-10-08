import React, { Fragment } from 'react';
import foto2 from './foto2.jpg'
import './SobreMi.css'

const SobreMi = () => {
    return (
        <Fragment>
            <section className='s' id="about">
                <div className='tituloSeccion' ><h1>SOBRE MI</h1>
                </div>
                <div className="yo">
                    <img src={foto2} alt="foto2" />
                    <div className='parrafo'>
                        <p>
                            Soy un desarrollador web Front-End de Misiones, Argentina.
                            Actualmente estoy cursando el Bootcam Front-End del Silicon Misiones. Cada día adquiero nuevos conocimientos
                            y habilidades para brindar así un mejor servicio en el área.<br /><br />También me estoy capacitando en el manejo del inglés,
                            uno de los idiomas mas demandado en estos tiempos. Además, cuento con gran conocimiento en el
                            campo de la informática. En la sección "Proyectos" puedes ver algunos de mis ultimos trabajos. 
                        </p>
                        <div className="boton-container">
                            <button className="botonHereMe">Aquí Yo</button>
                        </div>
                        <div className="boton-container">
                            <button className="botonDownload">Descarga </button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
export default SobreMi