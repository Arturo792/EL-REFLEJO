import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "./assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/home" className="logo-link">
          <img src={logo} alt="Logo EL REFLEJO" className="logo-image" />
          <h1>"EL REFLEJO"</h1>
        </Link>
      </div>
      
      <nav className="navbar">
        <ul>
          <li><Link to="/home">Inicio</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/galeria">Galería</Link></li>
          <li><Link to="/contactanos">Contáctanos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;