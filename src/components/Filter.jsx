import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setCurrentOption } from '../redux/slices/filter';

const Filter = () => {
  const selectRef = useRef(null);
  const dispatch = useDispatch();
  
  const handleSelectChange = () => {
    const currentValue = selectRef.current.value;
    dispatch(setCurrentOption(currentValue));
  }

  return (
    <select name="seasons" ref={selectRef} onChange={handleSelectChange}>
      <option value="S01">1 season</option>
      <option value="S02">2 season</option>
      <option value="S03">3 season</option>
      <option value="S04">4 season</option>
      <option value="S05">5 season</option>
    </select>
  )
}

export default Filter