import style from './SearchBar.module.css';
import { getGameName } from '..//..//Redux/Actions'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import OrderGenre from '../OrderGenre/OrderGenre';

export default function SearchBar() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      dispatch(getGameName(searchTerm));
    };
  
    return (
        <div className={style.container}>
     <form onSubmit={handleSearch} className={style.searchBar}>
      <input
        type="text"
        placeholder="Search games..."
        value={searchTerm}
        onChange={handleInputChange}
        className={style.input}
      />
      <button type="submit" className={style.buttonS}>Search</button>
    </form>
      <OrderGenre/>
      </div>
    );
    
  };