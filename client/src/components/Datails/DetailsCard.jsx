import style from './DetailsCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameID } from '../../Redux/Actions';
const DetailsCard = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const gameDetails = useSelector(state => state.videogame);
    useEffect(() => {
        dispatch(getGameID(id));
      }, [dispatch, id]);

    if (!gameDetails) {
        return <div>Cargando detalles...</div>;
    };  

    return (
        
        <div className={style.container}>
            <div>
                <button className={style.btn} onClick={() => window.history.back()}>Back</button>
            </div>
            <div>
                <h3 className={style.title}>{gameDetails.name}</h3>
            </div>
            <div className={style.imgcontainer}>
                <img src={gameDetails.image} alt={gameDetails.name} />
            </div>
            <div>
                <h4>{gameDetails.plataform}</h4>
            </div>
            <div>
                <p>{gameDetails.description}</p>
            </div>
            <div>
                <p>{gameDetails.released}</p>
            </div>
            <div>
                <p>{gameDetails.rating}</p>
            </div>
 {/*            <div>
                <p>{gameDetails.genres.join(', ')}</p>
            </div> */}
        </div>
    )
}

export default DetailsCard