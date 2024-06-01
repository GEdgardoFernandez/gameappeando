import style from './OrderGenre.module.css'
import { useDispatch } from 'react-redux';
import { orderByName, filterBySource } from '..//../Redux/Actions'

export default function OrderGenre() {
    const dispatch = useDispatch();
    const handleSort = (event) => {
        const order = event.target.value;
        dispatch(orderByName(order));
    }; 
    const handleFilterSource = (event) => {
        const name = event.target.value;
        if (name === 'api' || name === 'db') {
            dispatch(filterBySource(name));
        } else {
            dispatch(filterBySource('both'));
        }
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
                <span>Order Api or Data Base</span>
                <label className={style.material}>
                    <input type="checkbox" value={'api'} onChange={handleFilterSource} />
                    <span className={style.checkmark}></span>
                    Games in API
                </label>
                <label className={style.material}>
                    <input type="checkbox" value={'db'} onChange={handleFilterSource} />
                    <span className={style.checkmark}></span>
                    Games in DATABASE
                </label>
            </div>
        </div>
    )
}