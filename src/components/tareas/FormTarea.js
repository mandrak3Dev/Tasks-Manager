import React, {useContext} from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const FormTarea = () => {

  const proyectosContext = useContext(proyectoContext);
  const {proyecto} = proyectosContext;

  if(!proyecto) return null;
  const [proyectoActual] = proyecto;

  return (
    <div className="formulario">
      <form action="">
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            id=""
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-block btn-primario btn-submit"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
