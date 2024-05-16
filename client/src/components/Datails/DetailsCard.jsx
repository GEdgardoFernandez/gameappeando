import style from './DetailsCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameID } from '../../Redux/Actions';
const DetailsCard = (params) => {
    const path = window.location.pathname;
    const idPath = path.split('/').pop();
    console.log(idPath)
    const dispatch = useDispatch()
    const { id } = useParams()
    console.log(id, params.id)
    const gameDatails = useSelector(state => state.videogame);
    useEffect(() => {
        dispatch(getGameID(id));
    }, [dispatch, id]);

    if (!gameDatails) {
        return <div>Cargando detalles...</div>;
    };
    console.log(gameDatails.platforms)
    return (

        <div className={style.container}>
            <div>
                <button className={style.btn} onClick={() => window.history.back()}>Back</button>
            </div>
            <div>
                <h3 className={style.title}>{gameDatails.name}</h3>
            </div>
            <div className={style.imgcontainer}>
                <img src={gameDatails.img} alt={gameDatails.name} />
                <img src={gameDatails.image} alt={gameDatails.name} />
            </div>
            <div>
                <h4>{gameDatails.platforms}</h4>
            </div>
            <div>
                {gameDatails.description}
            </div>
            <div>
                <p>{gameDatails.released}</p>
            </div>
            <div>
                <p>{gameDatails.rating}</p>
            </div>
            <div>
                <p>{gameDatails.genres}</p>
            </div>
        </div>
    )
}

export default DetailsCard