/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import "../App.css"; // Asegúrate de importar los estilos CSS aquí

function Card(props) {
  return (
    <div className="card-container">
      <div className="card">
        <h2 className="card-title">Hola {props.title} !</h2>
        <p className="card-content">Sabemos que tu anime favorito es: {props.content}</p>
      </div>
    </div>
  );
}

export default Card;
