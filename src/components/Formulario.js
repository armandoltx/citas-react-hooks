import React, { useState, Fragment } from 'react';


function Formulario () {

  return (
    <Fragment>
      <form>
        <label>Nombre de la Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de la Mascota"
        />

        <label>Nombre del Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-fill-width"
          placeholder="Nombre del dueño de la Mascota"
        />

        <label htmlFor="">Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
        />

        <label htmlFor="">Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
        />
        <label htmlFor=""></label>
          <textarea
            name="sitomas"
            className="u-full-width"
          ></textarea>

        <button type="submit" className="button-primary u-full-width">Agregar</button>

      </form>
    </Fragment>
  )

}

export default Formulario;