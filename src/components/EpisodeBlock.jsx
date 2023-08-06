import axios from '../axios';
import React, { useEffect, useState } from 'react'

const EpisodeBlock = () => {
  
  return (
    <div className="block-item">
      <div className="block-item__image">
        <img src="./assets/season.jpg" alt="preview" />
      </div>
      <div className="block-item__header">
        <span>The Ricklantis Mixup</span>
      </div>
      <div className="block-item__text">
        <span>Episode №28</span><br />
        <span>Release date: September 10, 2017</span>
      </div>
    </div>
  )
}

export default EpisodeBlock