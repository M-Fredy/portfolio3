import './TrabajosRecientes.css';
import React, { Fragment } from 'react';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';


const TrabajosRecientes = () => {
    return (
        <Fragment>
            <section>
                <div className='tituloSeccion' ><h1>Trabajos Recientes</h1>
                </div>
                <div className='cajaTrabajos'>
                    <div className='trabajo'><img src={img1} alt="miImagen1" />
                    </div>
                    <div className='trabajo'><img src={img2} alt="miImagen2" />
                    </div>
                    <div className='trabajo'><img src={img3} alt="miImagen3" />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default TrabajosRecientes 