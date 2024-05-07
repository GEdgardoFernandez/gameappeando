import style from './MenuBar.module.css';
import SearchBar from '../SearchBar/SearchBar';


export default function MenuBar({onSearch}) {

    return (
        <div className={style.container}>
            <button className={style.button}>Home</button>
            <button className={style.button}>Games</button>
            <button className={style.button}>Genres</button>
            <button className={style.button}>Platforms</button>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}