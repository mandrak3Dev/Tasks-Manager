import React, { useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Proyecto = ({ proyecto }) => {
  //Obtener state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const {proyectoActual} = proyectosContext;

  return (
    <li>
      <button className="btn btn-blank" type="submit" onClick={() => proyectoActual(proyecto.id)}>
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
