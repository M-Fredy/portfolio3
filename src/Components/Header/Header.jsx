import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <React.Fragment>
            <header>
                <h1>FM</h1>
                <button id="abrir" className="abrir-menu" onClick={toggleMenu}>
                    <i className="bi bi-list"></i>
                </button>
                <nav className={`nav ${menuOpen ? 'active' : ''}`} id="nav">
                    <button className="cerrar-menu" id="cerrar" onClick={toggleMenu}>
                        <i className="bi bi-x"></i>
                    </button>
                    <ul className="nav-list">
                        <li><a className="nav-link" href="#home">Inicio</a></li>
                        <li><a className="nav-link" href="#about">Sobre Mi</a></li>
                        <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li><a className="nav-link" href="#news">News</a></li>
                        <li><a className="nav-link" href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    );
}

export default Header;
