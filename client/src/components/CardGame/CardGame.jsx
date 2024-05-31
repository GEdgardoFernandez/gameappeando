
import style from './CardGame.module.css';
export default function CardGame(params) {

    return (
        <div className={style.containerCard}>
            <div className={style.imgcontainer}>
                <img className={style.img} src={params.image} alt={params.name} onClick={() => window.location.href = `/details/${params.id}`} />
                <span className={style.rating}>⭐{params.rating}</span>
            </div>
            <div className={style.textcontainer}>
                <h3 className={style.title}>{params.name}</h3>
                <h3 className={style.title}>{params.genre}</h3>
            </div>
        </div>

    )
}