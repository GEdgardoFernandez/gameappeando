import style from './SearchBar.module.css';
import { getGameName } from '..//..//Redux/Actions'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';


export default function SearchBar() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };
  console.log(searchTerm)
    const handleSearch = () => {
      if(searchTerm === '' || searchTerm.charCodeAt === 32){
        return alert('Please enter a valid game name')
      }
      dispatch(getGameName(searchTerm));
      setSearchTerm('')
    };
    
    return (
        <div className={style.container}>
      <input
        type="text"
        placeholder="Search games..."
        value={searchTerm}
        onChange={handleInputChange}
        className={style.input}
      />
      <button onClick={handleSearch} className={style.buttonS}>Search</button>
      </div>
    );
    
  };