import React, { useState, Fragment } from 'react';


function Formulario({crearCita}) {

  // añadimos el state, el 1 es el state(cita), el 2 es q va actualizar el state (actualizarCita) y dento de los parentesis son los valores iniciales dentro del {}
  // para acceder a los valores del formulario antes usabamos ref, ahora usamos la propiedad name del input
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  })

  const actualizarState = (e) => {
    // actualizar el state con los nuevos datos del formulario
    // primero hacemos copia del state, para q cuando escribamos no nos borre los otros campos
    // con [e.target.name] accedemos al name en cada input
    actualizarCita({
      ...cita,
      [e.target.name] : [e.target.value]
    })
  }

  // console.log(cita);

  const enviarCita = (e) => {
    // prevenir el comportamiento default y quedarnos en el form
    e.preventDefault();
    // pasar hacia el componente principal la cita (el state) para ellos usamos la funcion q hemos declarado en el componente padre para agregar las nuevas citas al state
    crearCita(cita);
    // console.log(cita)

    // reiniciar el state (reiniciar el form)

  }

  return (
    <Fragment>
      <form onSubmit={enviarCita}>
        <label>Nombre de la Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de la Mascota"
          onChange={actualizarState}
        />

        <label>Nombre del Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño de la Mascota"
          onChange={actualizarState}
        />

        <label htmlFor="">Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
        />

        <label htmlFor="">Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
        />

        <label htmlFor=""></label>
          <textarea
            name="sitomas"
            className="u-full-width"
            onChange={actualizarState}
          ></textarea>

        <button type="submit" className="button-primary u-full-width">Agregar</button>

      </form>
    </Fragment>
  )

}

export default Formulario;