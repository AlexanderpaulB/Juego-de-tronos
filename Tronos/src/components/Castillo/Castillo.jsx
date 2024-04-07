// eslint-disable-next-line no-unused-vars
import React from 'react'
import Idiomas from '../Idiomas/Idiomas'
import "./Castillo.css";
import { NavLink } from 'react-router-dom';


export default function Castillo() {
  return (
    <>
      <nav className='casti'>
        
          <li>
             <NavLink exact="true" to="/">
                <span className="material-symbols-outlined">
                  fort
                </span>
              </NavLink>
          </li>
          
          <div>
            <Idiomas></Idiomas>
          </div>

      </nav>
      </>
  )
}
