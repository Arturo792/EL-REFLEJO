import React from "react";
import "../styles/nosotros.css";

function Nosotros() {
  return (
    <section id="nosotros" className="nosotros-section">
      <div className="container">
        <h2>Sobre Nosotros</h2>
        
        <div className="about-intro">
          <p>
            La Vidriería "El Reflejo" se dedica a brindar soluciones en vidrio y aluminio para el 
            hogar, oficinas y comercios. Nos especializamos en ventanas, puertas, vidrios 
            decorativos y templados, adaptándonos a las necesidades de cada cliente.
          </p>
          <p>
            Nuestro enfoque está en calidad, personalización y atención cercana, ofreciendo 
            productos duraderos y estéticos que realzan cualquier espacio. Además, 
            complementamos nuestros servicios con artículos de ferretería, lo que nos permite 
            ofrecer soluciones completas y convenientes.
          </p>
          <p>
            En "El Reflejo", nuestro compromiso es transformar tus espacios con estilo y 
            funcionalidad, garantizando un servicio confiable y productos de primera.
          </p>
        </div>
        
        <div className="about-content">
          <div className="mission">
            <h3>Misión</h3>
            <p>
              Nos dedicamos a ofrecer soluciones personalizadas en vidriería de alta calidad, 
              combinando innovación, atención cercana y excelencia para garantizar seguridad, 
              funcionalidad y estética en cada proyecto, generando confianza y satisfacción en 
              nuestros clientes.
            </p>
          </div>
          
          <div className="vision">
            <h3>Visión</h3>
            <p>
              Liderar el sector vidriero regional con soluciones innovadoras y servicio excepcional, 
              impulsando el crecimiento sostenible de nuestra comunidad.
            </p>
          </div>
          
          <div className="values">
            <h3>Valores</h3>
            <ul>
              <li><strong>Calidad:</strong> Compromiso con la excelencia en cada producto y servicio que ofrecemos.</li>
              <li><strong>Innovación:</strong> Búsqueda constante de nuevas tecnologías y diseños que mejoren nuestra oferta.</li>
              <li><strong>Responsabilidad:</strong> Cumplimiento ético y profesional en todas nuestras acciones.</li>
              <li><strong>Trabajo en equipo:</strong> Fomento de un ambiente colaborativo y de respeto mutuo.</li>
              <li><strong>Orientación al cliente:</strong> Prioridad en entender y satisfacer las necesidades de nuestros clientes.</li>
            </ul>
          </div>
          
          <div className="policies">
            <h3>Nuestro Compromiso</h3>
            <p>
              Trabajamos con los más altos estándares de seguridad y calidad. Garantizamos 
              la durabilidad y funcionalidad de todos nuestros productos, asegurando que cada 
              proyecto refleje nuestro compromiso con la excelencia y la satisfacción del cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;