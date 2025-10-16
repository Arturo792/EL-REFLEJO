import React from "react";
import "../styles/footer.css";
import whatsappLogo from "./assets/whatsapp.png"; // Asegúrate de tener este logo

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contacto</h3>
          <div className="whatsapp-contact">
            <img 
              src={whatsappLogo} 
              alt="WhatsApp" 
              className="whatsapp-logo" 
            />
            <span> +55 421-105-24-17</span>  
          </div>
          <div className="whatsapp-contact">
            <img 
              src={whatsappLogo} 
              alt="WhatsApp" 
              className="whatsapp-logo" 
            />
            <span>+55 421-123-06-79</span>  
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Fundador: Hilario Aguilar Bribiesca </p>
        <p>&copy; 2025 EL REFLEJO Vidriería. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;