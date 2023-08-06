import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Filter from '../../components/Filter';
import Search from '../../components/Search';
import EpisodeBlock from '../../components/EpisodeBlock';
import Footer from '../../components/Footer';
import Skeleton from '../../components/Skeleton';
import axios from '../../axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodes } from '../../redux/slices/episode';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [episodes, setEpisodes] = useState([]);
  const dispatch = useDispatch();

  const currentSeasonFilter = useSelector((state) => state.filter.currentOption.name);

  useEffect(() => {
    if (currentSeasonFilter) {
      dispatch(fetchEpisodes({ currentSeasonFilter }));
    }
  }, [currentSeasonFilter])
  

  return (
    <>
      <Header />
      <div className='main-block'>
        <Logo />
        <div className='nav-block'>
          <Filter />
          <Search />
        </div>
        <div className='row'>
          <EpisodeBlock />
          <EpisodeBlock />
          <EpisodeBlock />
          <EpisodeBlock />
          <EpisodeBlock />
          <EpisodeBlock />
          <EpisodeBlock />
          <EpisodeBlock />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;

