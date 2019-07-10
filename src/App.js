import React, { useState, useEffect, Fragment } from "react";

import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  // al recargar la pagina se pierden las citas, eso pasa pq el state inicial es un [] (viene de useState([]);) por lo que hay q pasar el valor q tenemos en localStorage. Para ello cargamos las citas de localStorage como state inicial.
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if (!citasIniciales) {
    citasIniciales = []
  }


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
  const [citas, guardarCita] = useState(citasIniciales);

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

  // Elimina las citas del State
  const eliminarCita = (index) => {
    const nuevasCitas = [...citas]; // hacemos copia del state
    nuevasCitas.splice(index, 1);   // eliminar un elemento de un arreglo coje 2 parametros, 1 q elemento quieres eliminar cuantos elementos a partir de el quieres eliminar, en nuestro caso 1
    guardarCita(nuevasCitas); // actualizamos el state
  }

  // Similar to didMount y didUpdated ejecuta un arrow function
  // useEffect se ejecuta cada vez q el componente cambie en cualquier cosa, podemos controlar eso pasandole un segundo parametro diciendole lo q tiene q cambiar para q se ejecute, lo q tiene q leer
  // en nuestro caso se ejecutara cuando las citas( el state) tenga algun cambio
  useEffect(
    () => {
      // console.log("dentro de useEffect, componente listo o algo cambio");
      // para q se guarden en el localstorage:
      let citasIniciales = JSON.parse(localStorage.getItem('citas'));
      // lo nombramos citas | leemos el dato de localStorage y lo pasamos por JSON.parse para convertirlo a JSON El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
      // para ver el storage chrome console > Application

      if(citasIniciales) {
        localStorage.setItem('citas', JSON.stringify(citas)); // estas citas son las del state que las convertimos a string
      } else {
        localStorage.setItem('citas', JSON.stringify([]));
      }
    },[citas] );

  // Cargar Condicionalmente el Titulo
  const titulo = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Administrar las Citas';

  return(
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="one-half column">
          <Formulario crearCita={crearCita} />
        </div>
        <div className="one-half column">
          <h2>{titulo}</h2>
          {citas.map((cita, index) => (
            <Cita
              key={index}
              index={index}
              cita={cita}
              eliminarCita={eliminarCita}
            />
          ))}
        </div>
      </div>
    </Fragment>
  )

}


export default App;