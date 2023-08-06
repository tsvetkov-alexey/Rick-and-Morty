import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <div className="block">
        <Link to='/'>
          <div className="block__logo">
            <img src="./assets/episodes.png" alt="episodes" />
          </div>
        </Link>
        <Link to='character'>
        <div className="block__logo">
          <img src="./assets/characters.png" alt="characters" className="block__logo_small" />
        </div>
        </Link>
      </div>
    </header>
  )
};
