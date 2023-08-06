import React, { useEffect} from 'react'

import {Logo, Filter, Search, EpisodeBlock, Skeleton} from '../../components';

import st from './home.module.scss'

import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodes } from '../../redux/slices/episode';

const Home = () => {
  const dispatch = useDispatch();

  const currentSeasonFilter = useSelector((state) => state.filter.currentOption.name);
  const { search } = useSelector(state => state.filter)
  const { episodes, status } = useSelector((state) => state.episode)

  useEffect(() => {
    if (currentSeasonFilter) {
      const allEpisodes = () => {
        dispatch(fetchEpisodes({ currentSeasonFilter, search }));
      }
      allEpisodes();
    }
  }, [currentSeasonFilter, search])



  const skeleton = [...new Array(12)].map((_, i) => <Skeleton key={i}/>)

  const totalEpisodes = episodes.results
  ? episodes.results.map((obj) => 
  <EpisodeBlock key={obj.id} {...obj} />)
  : (
  <div>
    <h3 className={st.title}>Похоже ничего не найдено</h3>
    <img src="../assets/null.png" alt='null' className={st.image}/>
  </div>
  );
  
  return (
    <>
      <div className='main-block'>
        <Logo />
        <div className='nav-block'>
          <Filter />
          <Search />
        </div>
        <div className='row'>
          {status === 'loading' ? skeleton : totalEpisodes } 
        </div>
      </div>
    </>
  )
}

export default Home;

