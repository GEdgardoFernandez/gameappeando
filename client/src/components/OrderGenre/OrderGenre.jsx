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
        if (name === 'api' || name === 'db' || name === 'both') {
            dispatch(filterBySource(name));
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
            {/*     <span>Order Api or Data Base</span>
                <label className={style.material}>
                    <input type="radio" value={'api'} onChange={handleFilterSource} />
                    <span className={style.checkmark}></span>
                    Games in API
                </label>
                <label className={style.material}>
                    <input type="radio" value={'db'} onChange={handleFilterSource} />
                    <span className={style.checkmark}></span>
                    Games in DATABASE
                </label>
                <label className={style.material}>
                    <input type="radio" value={'both'} onChange={handleFilterSource} />
                    <span className={style.checkmark}></span>
                    All Games
                </label> */}
                <div className={style.radioInputs}>
                    <label className={style.radio}>
                        <input type="radio" name="games" value={"api"} onChange={handleFilterSource}/>
                            <span className={style.name}>Games in Api</span>
                    </label>
                    <label className={style.radio}>
                        <input type="radio" name="games" value={"db"} onChange={handleFilterSource}/>
                            <span className={style.name}>Games in DATABASE</span>
                    </label>

                    <label className={style.radio}>
                        <input type="radio" name="games" value={"both"} onChange={handleFilterSource} defaultChecked/>
                            <span className={style.name}>All Games</span>
                    </label>
                </div>
            </div>
        </div>
    )
}