import React from "react";
import "../styles/contactanos.css";

function Contactanos() {
  return (
    <section id="contactanos" className="contactanos-section">
      <div className="container">
        <div className="contact-header">
          <h2>Contáctanos</h2>
          <p>Estamos aquí para ayudarte. Visítanos o llámanos para cotizar tu proyecto</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-main">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Nuestra Ubicación</h3>
                <p className="address-main">Saturnino Esquivel No. 17 Centro</p>
                <p className="address-city">Coroneo, Guanajuato</p>
                <p className="address-reference">(Frente al mercado artesanal)</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h3>Teléfonos de Contacto</h3>
                <div className="phone-numbers">
                  <a href="tel:524211052417" className="phone-link">
                    <span className="phone-number">(52) 421-105-24-17</span>
                  </a>
                  <a href="tel:554211230679" className="phone-link">
                    <span className="phone-number">(55) 421-123-06-79</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-sidebar">
            <div className="hours-card">
              <h3>🕒 Horario de Atención</h3>
              <div className="hours-list">
                <div className="hour-item">
                  <span className="days">Lunes a Viernes</span>
                  <span className="time">8:00 AM - 6:00 PM</span>
                </div>
                <div className="hour-item">
                  <span className="days">Sábados</span>
                  <span className="time">8:00 AM - 2:00 PM</span>
                </div>
                <div className="hour-item">
                  <span className="days">Domingos</span>
                  <span className="time closed">Cerrado</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h4>¿Por qué elegirnos?</h4>
              <ul>
                <li>Cotizaciones sin costo</li>
                <li>Atención personalizada</li>
                <li>Productos de alta calidad</li>
                <li>Instalación profesional</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactanos;