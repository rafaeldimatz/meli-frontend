import React from 'react'
import './ErrorPage.scss'
import {RiFileForbidFill} from 'react-icons/ri'

export const ErrorPage : React.FC = () => {
  return (
    <div className='container p-1'>
    <h3>Error Interno - Intentelo nuevamente</h3>
      <div className='lupa'>
      <RiFileForbidFill size="70"/>
      <ul className='container-list'>
          <li className='container-list-item'><strong>Pagina no encontrada </strong></li>
          <li className='container-list-item'>El host no pudo conectarse.</li>
      </ul>
      </div>
</div>
  )
}

