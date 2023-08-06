import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const EpisodeBlock = ({ id, name, air_date }) => {
  const currentSeasonFilter = useSelector((state) => state.filter.currentOption.name);

  const seasonImages = {
    S01: './assets/season1.jpg',
    S02: './assets/season2.jpeg',
    S03: './assets/season3.jpeg',
    S04: './assets/season4.jpeg',
    S05: './assets/season5.jpeg',
  };

  return (
    <Link to={`/${id}`}>
      <div className="block-item">
        <div className="block-item__image">
          <img src={seasonImages[currentSeasonFilter]} alt="preview" />
        </div>
        <div className="block-item__header">
          <span>{name}</span>
        </div>
        <div className="block-item__text">
          <span>Episode №{id} </span><br />
          <span>Release date: {air_date}</span>
        </div>
      </div>
    </Link>
  )
};
