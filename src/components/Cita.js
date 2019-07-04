import React, { useState } from 'react';


function Cita ({cita}) {
  return(
    <div className="cita">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Propietario: <span>{cita.propietario}</span></p>
      <p>Telefono: <span>{cita.telefono}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Sintomas: <span>{cita.sintomas}</span></p>
    </div>
  )
}

export default Cita;