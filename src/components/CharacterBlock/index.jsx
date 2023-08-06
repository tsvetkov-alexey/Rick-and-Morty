import React from 'react'
import st from './characterBlock.module.scss'
import { Link } from 'react-router-dom'

export const CharacterBlock = ({id, name, image}) => {
  return ( 
    <Link to={`/character/${id}`}>
      <div className={st.charsRow}>
        <div className={st.body}>
          <img src={image}/>
          <span>{name}</span>
          <button>Learn more</button>
        </div>
      </div>
    </Link>
  )
};