import React, { useState, Fragment } from "react";

import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  // useState retorna 2 funciones el state y la funcion q actualiza el state

  // ====> const [state, actualizarState] = useState();  <===
  
  // El 1 state = this.state
  // El 2 es la funcion q actualiza el state == this.setState({});
  // El 3 useState, toma el valor inicial del state, puede ser un valor, un array o un objeto...
  // si el state es un objeto ==>
  // useState({
  //  nombre: '',
  //  apellido: '',
  //  });
  const [citas, guardarCita] = useState([]);

  // console.log(citas);

  // Funcion que usamos para agregar las nuevas citas al state trayendo los datos del componenete hijo formulario
  const crearCita = (citaEnviada) => {
    // citaEnviada es un parametro q contiene todo el objeto que viene del form
    // hay q pasarlo al componente Formulario
    // copiamos el state actual ==> citas ||| y agregamos el nuevo state ==> citaEnviada
    const nuevasCitas = [...citas, citaEnviada];
    console.log("nuevasCitas");
    console.log(nuevasCitas);
    // para guardarlo o almacenando en el state
    guardarCita(nuevasCitas);
  }

  return(
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="one-half column">
          <Formulario crearCita={crearCita} />
        </div>
        <div className="one-half column">
          {citas.map((cita, index) => (
            <Cita
              key={index}
              index={index}
              cita={cita}
            />
          ))}
        </div>
      </div>
    </Fragment>
  )

}


export default App;