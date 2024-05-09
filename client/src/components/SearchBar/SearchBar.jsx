import style from './SearchBar.module.css';



export default function SearchBar({onSearch}) {

    return (
        <div className={style.container}>
            <input className={style.input} type="text" placeholder="Search Game..." onChange={(e) => onSearch(e.target.value)}/>
            <label className={style.input}>Select Genre: </label>
            <select className={style.input}>
                <option value="Action">Action</option>
                <option value="Shooter">Shooter</option>
                <option value="Strategy">Strategy</option>
                <option value="RPG">RPG</option>
                <option value="Cards">Cards</option>
                <option value="Race">Race</option>
                <option value="Sport">Sport</option>
                <option value="MMORPG">MMORPG</option>
            </select>
        </div>
    )
}