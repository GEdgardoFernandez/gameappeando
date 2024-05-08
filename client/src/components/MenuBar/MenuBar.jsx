import style from './MenuBar.module.css';
import SearchBar from '../SearchBar/SearchBar';


export default function MenuBar({onSearch}) {

    return (
        <div className={style.container}>
            <button className={style.btn}>Home</button>
            <button className={style.btn}>Games</button>
            <button className={style.btn}>Genres</button>
            <button className={style.btn}>Platforms</button>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}