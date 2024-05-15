import style from './DetailsCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameID } from '../../Redux/Actions';
const DetailsCard = (params) => {
    const path = window.location.pathname;
    const idPath = path.split('/').pop();
    console.log(idPath)
    const dispatch = useDispatch()
    const { id } = useParams()
    console.log(id, params.id)
    useEffect(() => {
        dispatch(getGameID(idPath));
      }, [dispatch, idPath]);
    const gameDetails = useSelector(state => state.videogame);
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
            </div>  */}
        </div>
    )
}

export default DetailsCard