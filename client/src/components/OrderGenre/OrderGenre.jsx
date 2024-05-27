import style from './OrderGenre.module.css'
import { useDispatch } from 'react-redux';
import { orderByName } from '..//../Redux/Actions'
export default function OrderGenre() {
    const dispatch = useDispatch();

    const handleSort = (event) => {
        const order = event.target.value;
        dispatch(orderByName(order));
    };
    return (
        <div className={style.containerOrder}>
            <span className={style.input}>Select Order: </span>
            <br />
            <select className={style.input} onChange={handleSort}>
                <option value="">Select Order</option>
                <option value="A-Z" >Games A-Z</option>
                <option value="Z-A" >Games Z-A</option>
                <option value="Highest-Rating">Highest Rating</option>
                <option value="Lowest-Rating">Lowest Rating</option>
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