import style from './OrderGenre.module.css'

export default function OrderGenre() {
    return (
        <div className={style.containerOrder}>
            <span className={style.input}>Select Order: </span>
            <br />
            <select className={style.input}>
                <option value="A-Z">Games A-Z</option>
                <option value="Z-A">Games Z-A</option>
                <option value="MAJOR">Major Rating</option>
                <option value="MINOR">Minor Rating</option>
            </select>
            <div className={style.input}>
                <span>Order Genre</span>
                <label class={style.material}>
                    <input type="checkbox" />
                    <span class={style.checkmark}></span>
                    Genre A-Z
                </label>
                <label class={style.material}>
                    <input type="checkbox" />
                    <span class={style.checkmark}></span>
                    Genre Z-A
                </label>
            </div>
            <div className={style.input}>
                <span>Order Api or Data Base</span>
                <label class={style.material}>
                    <input type="checkbox" />
                    <span class={style.checkmark}></span>
                    Games in API
                </label>
                <label class={style.material}>
                    <input type="checkbox" />
                    <span class={style.checkmark}></span>
                    Games in DATA BASE
                </label>
            </div>
        </div>
    )
}