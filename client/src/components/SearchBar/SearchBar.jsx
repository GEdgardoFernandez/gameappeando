import style from './SearchBar.module.css';



export default function SearchBar({onSearch}) {

    return (
        <div className={style.container}>
            <input className={style.input} type="text" placeholder="Search Game..." onChange={(e) => onSearch(e.target.value)}/>
            <label className={style.input}>Select Order: </label>
            <select className={style.input}>
                <option value="Alphabetical">Alphabet</option>
                <option value="Rating">Rating</option>
                <option value="AllGames">All Games</option>
            </select>
        </div>
    )
}