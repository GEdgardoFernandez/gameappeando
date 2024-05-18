import style from './OrderGenre.module.css'

export default function OrderGenre() {
    return (
        <div className={style.containerOrder}>
            <label className={style.input}>Select Order: </label>
            <select className={style.input}>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="MAJOR">Major Rating</option>
                <option value="MINOR">Minor Rating</option>
            </select>
        </div>
    )
}