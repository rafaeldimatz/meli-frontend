import React from 'react'
import {RiSearchLine} from 'react-icons/ri'
import './NotProductFound.scss'

export const NotProductFound : React.FC = () => {
  return (
    <div className='container p-1'>
            <h3>No hay publicaciones que coincidan con tu búsqueda</h3>
              <div className='lupa'>
              <RiSearchLine size="70"/>
              <ul className='container-list'>
                  <li className='container-list-item'><strong>Revisá la ortografía </strong>de la palabra.</li>
                  <li className='container-list-item'>Utilizá <strong>palabras más genéricas </strong> o menos palabras.</li>
                  <li className='container-list-item'>Navegá por las categorías para encontrar un producto similar</li>
              </ul>
              </div>
    </div>
  )
}