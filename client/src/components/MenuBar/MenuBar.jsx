import style from './MenuBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';

export default function MenuBar({onSearch}) {
const navigate = useNavigate();
    return (
        <div className={style.container}>
            <button className={style.btn} onClick={() => navigate('/home')}>Home</button>
            <button className={style.btn} onClick={() => navigate('/addgame')} >Add Game</button>
            <button className={style.btn} onClick={() => navigate('/about')}>About Me</button>
        </div>
    )
}