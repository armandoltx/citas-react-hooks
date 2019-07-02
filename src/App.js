import React, { useState } from "react";

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

  console.log(citas);

  return(
    <h1>Hola</h1>
  )

}


export default App;