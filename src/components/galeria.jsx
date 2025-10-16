import React, { useState } from "react";
import "../styles/galeria.css";

// Importa tus imágenes reales
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

function Galeria() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [imagenActual, setImagenActual] = useState(null);

  const proyectos = [
    {
      id: 1,
      imagen: imagen1,
      titulo: "Puerta Principal Moderna",
      descripcion: "Puerta de entrada con diseño contemporáneo y herrajes premium",
      categoria: "Puertas"
    },
    {
      id: 2,
      imagen: imagen2,
      titulo: "Puerta Corrediza de Aluminio",
      descripcion: "Sistema corredizo para espacios reducidos",
      categoria: "Puertas"
    },
    {
      id: 3,
      imagen: imagen3,
      titulo: "Puerta con Vidrio Templado",
      descripcion: "Combinación de seguridad y elegancia",
      categoria: "Puertas"
    },
    {
      id: 4,
      imagen: imagen4,
      titulo: "Puerta de Cristal Deslizante",
      descripcion: "Ideal para acceso a terraza o jardín",
      categoria: "Puertas"
    },
    {
      id: 5,
      imagen: imagen5,
      titulo: "Puerta de Baño con Privacidad",
      descripcion: "Vidrio esmerilado para máxima privacidad",
      categoria: "Puertas"
    },
    {
      id: 6,
      imagen: imagen6,
      titulo: "Ventana Panorámica",
      descripcion: "Máxima entrada de luz natural",
      categoria: "Ventanas"
    },
    {
      id: 7,
      imagen: imagen7,
      titulo: "Ventana de Aluminio Negro",
      descripcion: "Diseño moderno con perfilería oscura",
      categoria: "Ventanas"
    },
    {
      id: 8,
      imagen: imagen8,
      titulo: "Ventana Corrediza",
      descripcion: "Sistema práctico para cualquier espacio",
      categoria: "Ventanas"
    },
    {
      id: 9,
      imagen: imagen9,
      titulo: "Ventana con Vidrio de Seguridad",
      descripcion: "Protección y estilo en uno",
      categoria: "Ventanas"
    },
    {
      id: 10,
      imagen: imagen10,
      titulo: "Mampara de Baño",
      descripcion: "Ducha con mampara de vidrio templado",
      categoria: "Baños"
    },
    {
      id: 11,
      imagen: imagen11,
      titulo: "Espejo de Baño Personalizado",
      descripcion: "Espejo con iluminación integrada",
      categoria: "Baños"
    },
    {
      id: 12,
      imagen: imagen12,
      titulo: "Barandal de Escalera",
      descripcion: "Estructura de vidrio para escalera moderna",
      categoria: "Estructural"
    }
  ];

  const categorias = [];

  const abrirModal = (proyecto) => {
    setImagenActual(proyecto);
    setModalAbierto(true);
    document.body.style.overflow = "hidden"; // Evita scroll del fondo
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setImagenActual(null);
    document.body.style.overflow = "auto"; // Restaura scroll
  };

  const cambiarImagen = (direccion) => {
    if (!imagenActual) return;
    
    const indexActual = proyectos.findIndex(p => p.id === imagenActual.id);
    let nuevoIndex;
    
    if (direccion === "next") {
      nuevoIndex = (indexActual + 1) % proyectos.length;
    } else {
      nuevoIndex = (indexActual - 1 + proyectos.length) % proyectos.length;
    }
    
    setImagenActual(proyectos[nuevoIndex]);
  };

  // Cerrar modal con Escape
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        cerrarModal();
      }
    };

    if (modalAbierto) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [modalAbierto]);

  return (
    <div className="galeria-page">
      <div className="galeria-header">
        <h2>Nuestra Galería</h2>
        <p>Descubre la calidad y elegancia de nuestros trabajos en vidrio y aluminio</p>
      </div>

      <div className="filtros">
        {categorias.map(categoria => (
          <button key={categoria} className="filtro-btn">
            {categoria}
          </button>
        ))}
      </div>

      <div className="galeria-grid">
        {proyectos.map(proyecto => (
          <div 
            key={proyecto.id} 
            className="proyecto-card"
            onClick={() => abrirModal(proyecto)}
          >
            <div className="proyecto-imagen">
              <img src={proyecto.imagen} alt={proyecto.titulo} />
              <div className="proyecto-overlay">
                <div className="proyecto-info">
                  <h3>{proyecto.titulo}</h3>
                  <p>{proyecto.descripcion}</p>
                  <span className="categoria">{proyecto.categoria}</span>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para imagen grande */}
      {modalAbierto && imagenActual && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="modal-cerrar" onClick={cerrarModal}>×</button>
            
            <button 
              className="modal-nav modal-nav-prev" 
              onClick={() => cambiarImagen("prev")}
            >
              ‹
            </button>
            
            <div className="modal-imagen-container">
              <img 
                src={imagenActual.imagen} 
                alt={imagenActual.titulo} 
                className="modal-imagen"
              />
              <div className="modal-info">
                <h3>{imagenActual.titulo}</h3>
                <p>{imagenActual.descripcion}</p>
                <span className="modal-categoria">{imagenActual.categoria}</span>
              </div>
            </div>
            
            <button 
              className="modal-nav modal-nav-next" 
              onClick={() => cambiarImagen("next")}
            >
              ›
            </button>
          </div>
        </div>
      )}

      <div className="galeria-cta">
        <h3>¿Te gustó nuestro trabajo?</h3>
        <p>Contáctanos para cotizar tu proyecto personalizado</p>
        <button className="cta-button">Solicitar Cotización</button>
      </div>
    </div>
  );
}

export default Galeria;