import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  //Obtener State del formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

  const [proyecto, guardarProyecto] = useState({
    nombre: ""
  });

  const { nombre } = proyecto;

  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProyecto = (e) => {
    e.preventDefault();
    if(nombre === ''){
      mostrarError();
      return;
    } 

    agregarProyecto(proyecto);

    guardarProyecto({
      nombre: ''
    })
  };

  const newProjectButton = () => {
    mostrarFormulario()
  }

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario" onClick={newProjectButton}>
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form
          action=""
          className="formulario-nuevo-proyecto"
          onSubmit={onSubmitProyecto}
        >
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            value="Agregar Proyecto"
            className="btn btn-primario btn-block"
          />
        </form>
      ) : null}
      {errorFormulario ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p> : null}
    </Fragment>
  );
};

export default NuevoProyecto;
