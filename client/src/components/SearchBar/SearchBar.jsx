import style from './SearchBar.module.css';



export default function SearchBar({onSearch}) {

    return (
        <div className={style.container}>
            <input type="text" className={style.input} placeholder="Search..." onChange={(e) => onSearch(e.target.value)}/>
        </div>
    )
}