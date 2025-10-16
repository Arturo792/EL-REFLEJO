import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importa Link
import "../styles/home.css";

// Importa todas las imágenes de la galería
import imagen1 from "./assets/galeria/puerta 1.jpg";
import imagen2 from "./assets/galeria/puerta 2.jpg";
import imagen3 from "./assets/galeria/puerta 3.jpg";
import imagen4 from "./assets/galeria/puerta 4.jpg";
import imagen5 from "./assets/galeria/puerta 5.jpg";
import imagen6 from "./assets/galeria/ventana 1.jpg";
import imagen7 from "./assets/galeria/ventana 2.jpg";
import imagen8 from "./assets/galeria/ventana 3.jpg";
import imagen9 from "./assets/galeria/ventana 4.jpg";
import imagen10 from "./assets/galeria/baño.jpg";
import imagen11 from "./assets/galeria/baño 2.jpg";
import imagen12 from "./assets/galeria/escaleras.jpg";

function Home() {
  const [imagenesCarrusel, setImagenesCarrusel] = useState([]);
  const [imagenActual, setImagenActual] = useState(0);

  // Todas las imágenes disponibles
  const todasLasImagenes = [
    { src: imagen1, titulo: "Puerta Principal Moderna" },
    { src: imagen2, titulo: "Puerta Corrediza de Aluminio" },
    { src: imagen3, titulo: "Puerta con Vidrio Templado" },
    { src: imagen4, titulo: "Puerta de Cristal Deslizante" },
    { src: imagen5, titulo: "Puerta de Baño con Privacidad" },
    { src: imagen6, titulo: "Ventana Panorámica" },
    { src: imagen7, titulo: "Ventana de Aluminio Negro" },
    { src: imagen8, titulo: "Ventana Corrediza" },
    { src: imagen9, titulo: "Ventana con Vidrio de Seguridad" },
    { src: imagen10, titulo: "Mampara de Baño" },
    { src: imagen11, titulo: "Espejo de Baño Personalizado" },
    { src: imagen12, titulo: "Barandal de Escalera" }
  ];

  // Seleccionar 4 imágenes aleatorias al cargar el componente
  useEffect(() => {
    const seleccionarImagenesAleatorias = () => {
      const copiaImagenes = [...todasLasImagenes];
      const aleatorias = [];
      
      // Seleccionar 4 imágenes únicas aleatoriamente
      for (let i = 0; i < 4; i++) {
        if (copiaImagenes.length === 0) break;
        const randomIndex = Math.floor(Math.random() * copiaImagenes.length);
        aleatorias.push(copiaImagenes[randomIndex]);
        copiaImagenes.splice(randomIndex, 1);
      }
      
      setImagenesCarrusel(aleatorias);
    };

    seleccionarImagenesAleatorias();
  }, []);

  // Cambiar automáticamente las imágenes cada 5 segundos
  useEffect(() => {
    if (imagenesCarrusel.length === 0) return;
    
    const intervalo = setInterval(() => {
      setImagenActual((prev) => (prev + 1) % imagenesCarrusel.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, [imagenesCarrusel]);

  const siguienteImagen = () => {
    setImagenActual((prev) => (prev + 1) % imagenesCarrusel.length);
  };

  const anteriorImagen = () => {
    setImagenActual((prev) => (prev - 1 + imagenesCarrusel.length) % imagenesCarrusel.length);
  };

  const irAImagen = (index) => {
    setImagenActual(index);
  };

  return (
    <section id="home" className="home-section">
      {/* Carrusel Hero */}
      <div className="carrusel-hero">
        <div className="carrusel-container">
          {imagenesCarrusel.length > 0 && (
            <>
              <div className="carrusel-slide">
                <img 
                  src={imagenesCarrusel[imagenActual].src} 
                  alt={imagenesCarrusel[imagenActual].titulo}
                  className="carrusel-imagen"
                />
                <div className="carrusel-overlay">
                  <div className="carrusel-content">
                    <h1>Bienvenidos a EL REFLEJO</h1>
                    <p>Tu vidriería de confianza con los mejores materiales y acabados</p>
                    <div className="hero-features">
                      <div className="feature">
                        <h3>Calidad</h3>
                        <p>Materiales de primera calidad</p>
                      </div>
                      <div className="feature">
                        <h3>Experiencia</h3>
                        <p>Más de 15 años en el mercado</p>
                      </div>
                      <div className="feature">
                        <h3>Garantía</h3>
                        <p>Todos nuestros trabajos tienen garantía</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controles del carrusel */}
              <button className="carrusel-btn carrusel-prev" onClick={anteriorImagen}>
                ‹
              </button>
              <button className="carrusel-btn carrusel-next" onClick={siguienteImagen}>
                ›
              </button>

              {/* Indicadores */}
              <div className="carrusel-indicadores">
                {imagenesCarrusel.map((_, index) => (
                  <button
                    key={index}
                    className={`indicador ${index === imagenActual ? 'active' : ''}`}
                    onClick={() => irAImagen(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Sección de información rápida - ENLACES ACTUALIZADOS */}
      <div className="info-rapida">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🏢</div>
              <h3>Conócenos</h3>
              <p>Más de 15 años de experiencia en vidriería y aluminio</p>
              <Link to="/nosotros" className="info-link">Ver más →</Link>
            </div>

            <div className="info-card">
              <div className="info-icon">🖼️</div>
              <h3>Nuestros Trabajos</h3>
              <p>Galería con nuestros mejores proyectos realizados</p>
              <Link to="/galeria" className="info-link">Ver galería →</Link>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Contáctanos</h3>
              <p>Cotiza tu proyecto personalizado sin compromiso</p>
              <Link to="/contactanos" className="info-link">Solicitar cotización →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;