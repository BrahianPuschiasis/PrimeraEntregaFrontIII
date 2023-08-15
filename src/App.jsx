import React, { useState } from "react";
import Card from "./Card";
import Form from "./Form";
import "./App.css";

function App() {
  const [tarjetas, setTarjetas] = useState([]);

  const handleFormSubmit = (nombre, animeFavorito) => {
    const nuevaTarjeta = { nombre, animeFavorito };
    setTarjetas([...tarjetas, nuevaTarjeta]);
  };

  return (
    <div className="App">
      <h1>Formulario</h1>
      <Form onSubmit={handleFormSubmit} />
      <div className="card-container">
        {tarjetas.map((tarjeta, index) => (
          <Card key={index} title={tarjeta.nombre} content={tarjeta.animeFavorito} />
        ))}
      </div>
    </div>
  );
}

export default App;
