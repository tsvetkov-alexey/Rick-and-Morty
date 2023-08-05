import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="block">
        <div className="block__logo">
          <img src="./assets/episodes.png" alt="episodes" />
        </div>
        <div className="block__logo">
          <img src="./assets/characters.png" alt="characters" className="block__logo_small" />
        </div>
        <div className="block__logo">
          <img src="./assets/location.png" alt="location" />
        </div>
      </div>
    </header>
  )
}

export default Header