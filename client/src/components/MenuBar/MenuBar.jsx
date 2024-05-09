import style from './MenuBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';

export default function MenuBar({onSearch}) {
const navigate = useNavigate();
    return (
        <div className={style.container}>
            <button className={style.btn} onClick={() => navigate('/home')}>Home</button>
            <button className={style.btn} onClick={() => navigate('/genres')}>Genres</button>
            <button className={style.btn} onClick={() => navigate('/plataforms')} >Add Game</button>
            <button className={style.btn} onClick={() => navigate('/about')}>About</button>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}