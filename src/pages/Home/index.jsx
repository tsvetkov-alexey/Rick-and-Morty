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
  const dispatch = useDispatch();

  const currentSeasonFilter = useSelector((state) => state.filter.currentOption.name);
  const { episodes, status } = useSelector((state) => state.episode)

  useEffect(() => {
    if (currentSeasonFilter) {
      const allEpisodes = () => {
        dispatch(fetchEpisodes({ currentSeasonFilter }));
      }
      allEpisodes();
    }
  }, [currentSeasonFilter])

  const skeleton = [...new Array(12)].map((_, i) => <Skeleton key={i}/>)

  const totalEpisodes = episodes.results
  ? episodes.results.map((obj) => <EpisodeBlock key={obj.id} {...obj} />)
  : null;
  
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
          {status === 'loading' ? skeleton : totalEpisodes}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;

