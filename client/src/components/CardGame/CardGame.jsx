import style from './CardGame.module.css';
import { NavLink } from 'react-router-dom';
export default function CardGame(param) {
    return (
        <div className={style.containerCard}>
            <div className={style.imgcontainer}>
                <img className={style.img} src={param.image} alt={param.name} />
            </div>
            <div className={style.textcontainer}>
                <h3 className={style.title}>{param.name}</h3>
                <h3 className={style.title}>{param.genre}</h3>
                <NavLink
                        to={`/videogame/${param.key}`}
                        className={style.detailLink}
                    >More Details
                </NavLink>
            </div>
        </div>
        
    )
}