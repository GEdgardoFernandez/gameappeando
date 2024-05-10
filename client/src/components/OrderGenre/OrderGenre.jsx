import style from './OrderGenre.module.css'

export default function OrderGenre() {
    return (
        <div className={style.containerOrder}>
            <label className={style.input}>Select Order: </label>
            <select className={style.input}>
                <option value="Alphabetical">Alphabet</option>
                <option value="Rating">Rating</option>
            </select>
        </div>
    )
}