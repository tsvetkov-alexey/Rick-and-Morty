import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import st from './moreInfo.module.scss';

import {CharacterBlock, CharacterSkeleton, Loader} from '../../components';

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
    return <Loader /> ;
  }

  const skeleton = [...new Array(8)].map((_, i) => <CharacterSkeleton key={i} />);

  return (
    <>
      <div className="main-block">
        <h2 className={st.header}>Characters that appeared in episode #{id}</h2>
        <div className="characters">{isLoading ? skeleton : charsArr}</div>
      </div>
    </>
  );
};

export default MoreInfo;