import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCharacters } from '../../redux/slices/allCharacters';
import { setPage } from '../../redux/slices/filter';

import {CharacterSkeleton, CharacterBlock, Pagination } from '../../components';

const AllCharacters = () => {
  const dispatch = useDispatch();
  const {allCharacters, status} = useSelector((state) => state.allCharacters);
  const { page } = useSelector((state) => state.filter);

  const onChangePage = (page) => {
    dispatch(setPage(page));
  };

  const skeleton = [...new Array(12)].map((_, i) => <CharacterSkeleton key={i} />);

  useEffect(() => {
    dispatch(fetchAllCharacters({page}))
  }, [page])

  const totalCharacters =
    allCharacters.results?.length > 0
      ? allCharacters.results.map((obj) => <CharacterBlock key={obj.id} {...obj} />)
      : null;

  return (
    <div className='main-block'>
      <h2 style={{textAlign: 'center'}}>All characters</h2>
      <div className="characters">
        {status === 'loading' ? skeleton : totalCharacters}
      </div>
      <Pagination onChangePage={onChangePage}/>
    </div>
  )
}

export default AllCharacters