
import style from './CardGame.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
export default function CardGame(params) {
   
    const dispatch = useDispatch()
    const handleDispatch = () => {
        dispatch({type: 'GET_GAME_ID', payload: params.key})
    }
    return (        
        <div className={style.containerCard}>
            <div className={style.imgcontainer}>
                <img className={style.img} src={params.image} alt={params.name} onClick={() => window.location.href = `/details/${params.id}`}/>
            </div>
            <div className={style.textcontainer}>
                <h3 className={style.title}>{params.name}</h3>
                <h3 className={style.title}>{params.genre}</h3>
                <NavLink
                        onClick={handleDispatch}
                        to={`/details/${params.id}`}
                        className={style.detailLink}
                    >More Details
                </NavLink>
            </div>
        </div>
        
    )
}