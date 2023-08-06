import React, { useCallback, useRef, useState } from 'react'
import { setSearch } from '../redux/slices/filter';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [value, setValue] = useState('');
  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearch(str));
    }, 250),
    [],
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  }
   
  return (
    <div className="seasons-block__search">
      <input 
        type="text" 
        placeholder="Episode u're looking for..." 
        value={value}
        onChange={onChangeInput}
      />
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.5119 17.1552L15.281 12.9243C16.1552 11.6068 16.6668 10.0293 16.6668 8.33342C16.6668 3.73837 12.9285 0 8.33342 0C3.73837 0 0 3.73837 0 8.33342C0 12.9285 3.73837 16.6668 8.33342 16.6668C10.0293 16.6668 11.6068 16.1552 12.9243 15.281L17.1552 19.5119C17.8052 20.1627 18.8619 20.1627 19.5119 19.5119C20.1627 18.861 20.1627 17.806 19.5119 17.1552ZM2.50003 8.33342C2.50003 5.11672 5.11672 2.50003 8.33342 2.50003C11.5501 2.50003 14.1668 5.11672 14.1668 8.33342C14.1668 11.5501 11.5501 14.1668 8.33342 14.1668C5.11672 14.1668 2.50003 11.5501 2.50003 8.33342Z"
          fill="#18191B"
        />
      </svg>
    </div>
  )
}

export default Search;