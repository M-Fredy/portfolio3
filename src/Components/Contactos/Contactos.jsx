import React, { Component } from 'react';
import './Contactos.css';
import twitter from './twitter.png';
import behance from './behance.png';
import facebook from './facebook.png';
import linkedin from './linkedin.png';
import instagram from './instagram.png';

class Contactos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            formSucceeded: false,
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://formspree.io/f/xbjeanjk', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            this.setState({ formSucceeded: true });
        }
    }
    render() {
        return (
            <section id="contacto">
                <div className='tituloSeccion'>
                    <h1>Contactame</h1>
                </div>
                <div className="Contactos">
                    <div className="left">
                        <p>▘Teléfono<br />+543757896425</p> <br></br> <p>▘Email<br />fm630@gmail.com</p>
                    </div>
                    <div className="right">
                        {this.state.formSucceeded ? (
                            <p>¡Gracias por enviar el formulario!</p>
                        ) : (
                            <form onSubmit={this.handleSubmit}>
                                <div className='izq-der'>
                                    <div className='nombre-email'>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.handleInputChange}
                                            placeholder='Nombre'
                                        />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleInputChange}
                                            placeholder='Email'
                                        />
                                    </div>
                                    <div className='mensaje'>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={this.state.message}
                                            onChange={this.handleInputChange}
                                            placeholder='Cuéntame Sobre Tu Consulta'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button className='botonContacto' type="submit">Enviar Mensaje</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
                <div className='redesSociales'>
                    <img src={twitter} alt="twitter" />
                    <img src={behance} alt="" />
                    <img src={facebook} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </section>
        );
    }
}

export default Contactos;
