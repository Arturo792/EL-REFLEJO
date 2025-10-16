import React from "react";
import "../styles/novedades.css";

// Importa igual que en Galeria
import novedad1 from "./assets/novedades/novedad 1.jpg";
import novedad2 from "./assets/novedades/novedad 2.jpg";
import novedad3 from "./assets/novedades/novedad 3.jpg";
import novedad4 from "./assets/novedades/novedad 4.jpg";

function Novedades() {
  const novedades = [
    {
      id: 1,
      imagen: novedad1,
      titulo: "CUIDA TUS CANCELES DE BAÑO",
      descripcion: "Mantén el brillo y prolonga la vida útil de tus canceles con estos consejos prácticos. Después de bañarte, pasa una espátula o trapo seco para eliminar el exceso de agua. Evita usar productos con cloro o amoníaco, ya que dañan el acabado del vidrio. Limpia con una mezcla de agua, vinagre y jabón neutro para mejores resultados."
    },
    {
      id: 2,
      imagen: novedad2,
      titulo: "CUIDADO CON EL FRÍO",
      descripcion: "Protege tus vidrios durante los cambios de clima con estos tips rápidos. Limpia con agua tibia y jabón neutro (nada de cloro o alcohol!). Revisa los sellos o empaques: si ves grietas, pide revisión. Evita golpes por corrientes de aire o portazos. Si notas filtraciones o empañamientos, pide una revisión técnica."
    },
    {
      id: 3,
      imagen: novedad3,
      titulo: "EVITA EMPAÑAMIENTOS",
      descripcion: "Consejos para mantener tus espejos y vidrios impecables contra la humedad. Ventila el baño o cocina después de usarlos. Aplica un poco de jabón líquido o vinagre diluido y limpia con un paño de microfibra. Evita usar limpiadores abrasivos que rayen la superficie. Si notas manchas persistentes, usa agua tibia con bicarbonato."
    },
    {
      id: 4,
      imagen: novedad4,
      titulo: "LUZ Y AMPLITUD A TU ESPACIO",
      descripcion: "Descubre cómo los espejos pueden transformar y ampliar visualmente tus espacios. Coloca un espejo grande frente a una ventana: aprovecharás la luz natural. Usa marcos finos o metálicos si quieres un toque moderno y minimalista. Prefiere marcos de madera o con detalles si buscas un ambiente cálido y elegante."
    }
  ];

  return (
    <div className="novedades">
      <h1>Novedades y Consejos</h1>
      <p className="novedades-subtitle">
        Descubre tips y recomendaciones para el cuidado y decoración con espejos y vidrios.
      </p>
      
      <div className="novedades-grid-alternado">
        {novedades.map((novedad, index) => (
          <div 
            key={novedad.id} 
            className={`novedad-item ${index % 2 === 0 ? 'texto-imagen' : 'imagen-texto'}`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="novedad-texto">
                  <h3 className="novedad-titulo">{novedad.titulo}</h3>
                  <p className="novedad-descripcion">{novedad.descripcion}</p>
                </div>
                <div className="novedad-imagen-container">
                  <img 
                    src={novedad.imagen} 
                    alt={novedad.titulo}
                    className="novedad-imagen"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="novedad-imagen-container">
                  <img 
                    src={novedad.imagen} 
                    alt={novedad.titulo}
                    className="novedad-imagen"
                  />
                </div>
                <div className="novedad-texto">
                  <h3 className="novedad-titulo">{novedad.titulo}</h3>
                  <p className="novedad-descripcion">{novedad.descripcion}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Novedades;