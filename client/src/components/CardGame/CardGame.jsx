import style from './CardGame.module.css';

export default function CardGame({ game }) {

    return (
        <div className={style.container}>
            <div className={style.imgcontainer}>
                <img className={style.img} src={game.image} alt={game.name} />
            </div>
            <div className={style.textcontainer}>
                <h3 className={style.title}>{game.name}</h3>
                <h3 className={style.title}>{game.genres}</h3>
            </div>
        </div>
    )
}