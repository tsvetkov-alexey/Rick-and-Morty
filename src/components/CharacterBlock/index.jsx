import React from 'react'
import st from './characterBlock.module.scss'

const CharacterBlock = ({id, name, image}) => {
  return (
    <div className={st.charsRow} onClick={console.log(id)}>
      <div className={st.body}>
        <img src={image}/>
        <span>{name}</span>
        <button>Learn more</button>
      </div>
    </div>
  )
}

export default CharacterBlock