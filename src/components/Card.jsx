import React from 'react'

const Card = ({nombre, medico}) => {

    const date = new Date()
    const dia = date.getDate()
    const mes = date.getMonth()

  return (
    <div>
        <h3>{nombre}, Sacaste turno con el medico {medico}</h3>
        <h3>Tenes pactado un turno para el día {dia+7}/{mes+1} para las 16:00</h3>
    </div>
  )
}

export default Card