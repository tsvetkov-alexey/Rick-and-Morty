import React, { useEffect } from 'react'

import st from './characters.module.scss'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodeCharacter } from '../../redux/slices/episodeCharacters';

const Characters = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEpisodeCharacter({id}))
  }, [])
  const character = useSelector((state) => state.episodeCharacter.character)

  if (!character) {
    return (
      <div className='main-block'>
          <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className='main-block'>
      <div className={st.logo}>
        <img src='../assets/logo.png' />
      </div>
      <div className={st.block}>
        <img src={character.image} />
        <div className={st.info}>
          <h2>{character.name}</h2>
          <span>status: {character.status}</span><br />
          <span>species: {character.species}</span><br />
          <span>location: {character.location?.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Characters