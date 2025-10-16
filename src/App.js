import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Nosotros from "./components/nosotros";
import Contactanos from "./components/contactactanos";
import Galeria from "./components/galeria";
import Novedades from "./components/novedades"; // ← Nueva importación
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/novedades" element={<Novedades />} /> {/* ← Nueva ruta agregada */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;