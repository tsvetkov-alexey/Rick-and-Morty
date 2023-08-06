import React, { useEffect, useState } from 'react';
import st from './moreInfo.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CharacterBlock from '../../components/CharacterBlock';
import CharacterSkeleton from '../../components/CharacterSkeleton';

const MoreInfo = () => {
  const [char, setChar] = useState([]);
  const [charInfo, setCharInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchChars() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          'https://rickandmortyapi.com/api/episode/' + id
        );
        setChar(data);
      } catch (error) {
        console.log('ОШИБКА', error);
        navigate('/');
      }
    }
    fetchChars();
  }, []);

  useEffect(() => {
    async function fetchCharactersInfo() {
      if (char.characters) {
        setIsLoading(true);
        try {
          const charactersData = await Promise.all(
            char.characters.map((characterLink) => axios.get(characterLink))
          );

          // Индивидуальные данные по каждому персонажу
          const charactersInfo = charactersData.map((response) => response.data);

          setCharInfo(charactersInfo);
          setIsLoading(false);
        } catch (error) {
          console.log('ОШИБКА', error);
          navigate('/');
        }
      }
    }

    fetchCharactersInfo();
  }, [char.characters]);

  const charsArr =
    charInfo.length > 0
      ? charInfo.map((obj) => <CharacterBlock key={obj.id} {...obj} />)
      : null;

  if (!char) {
    return (
      <div className={st.loaderContainer}>
        <div className={st.loader}></div>
        <h4 className={st.loaderHeader}>Идет загрузка, подождите...</h4>
      </div>
    );
  }

  const skeleton = [...new Array(8)].map((_, i) => <CharacterSkeleton key={i} />);

  return (
    <>
      <Header />
      <div className="main-block">
        <h2 className={st.header}>Characters that appeared in episode #{id}</h2>
        <div className="characters">{isLoading ? skeleton : charsArr}</div>
      </div>
      <Footer />
    </>
  );
};

export default MoreInfo;
