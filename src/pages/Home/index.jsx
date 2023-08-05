import React from 'react'
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Filter from '../../components/Filter';
import Search from '../../components/Search';
import EpisodeBlock from '../../components/EpisodeBlock';
import Footer from '../../components/Footer';

const Home = () => {
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

