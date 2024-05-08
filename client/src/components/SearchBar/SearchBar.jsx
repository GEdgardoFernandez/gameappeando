import style from './SearchBar.module.css';



export default function SearchBar({onSearch}) {

    return (
        <div className={style.container}>
            <input className={style.input} type="text" placeholder="Search Game..." onChange={(e) => onSearch(e.target.value)}/>
        </div>
    )
}