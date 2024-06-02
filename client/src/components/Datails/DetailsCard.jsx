import style from './DetailsCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameID } from '../../Redux/Actions';
import Loading from '../Loading/Loading';
import notImage from '../../assets/Img/404Image.jpg';
const removeHtmlTags = (html) => {
    const temporalDivElement = document.createElement('div');
    temporalDivElement.innerHTML = html;
    return temporalDivElement.textContent || temporalDivElement.innerText || '';
  };
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

    if (gameDatails.length === 0) {
        return <div className={style.loadingContainer}><div className={style.center}><Loading /></div></div>;
    };
    console.log(gameDatails.platforms)
    return (

        <div className={style.containerDetails}>
            <div className={style.btnContainer}>
                <button className={style.btn} onClick={() => window.history.back()}>Back</button>
            </div>
            <div>
                <h3 className={style.name}>{gameDatails.name}</h3>
            </div>
            <div className={style.imgcontainer}>
                <img src={gameDatails.img? gameDatails.img : notImage} alt={gameDatails.name} className={style.image} />
                <img src={gameDatails.image? gameDatails.image : notImage} alt={gameDatails.name} className={style.image} />
            </div>
            <div>
                <h3 className={style.title}>Platforms</h3>
                <div className={style.ulPlatforms}>
                    {gameDatails.platforms?.map(p => <ul><li className={style.liPlatform}>{p}</li></ul>)}
                </div>
            </div>
            <div>
                <h3 className={style.title}>Description</h3>
                <div>
                    <p className={style.description}>{removeHtmlTags(gameDatails.description)}</p>
                </div>
            </div>

            <div className={style.containerDat}>
                <div>
                    <h3 className={style.title}>Released</h3>
                    <div>
                        <p className={style.description}>{gameDatails.released}</p>
                    </div>
                </div>
            <div>
                <h3 className={style.title}>Rating</h3>
                <div>
                    <p className={style.description}>{gameDatails.rating}</p>
                </div>
            </div>
            </div>
            <div>
                <h3 className={style.title}>Genres</h3>
                <div className={style.ulPlatforms} >
                    {gameDatails.genres?.map(g => <ul className={style.ulPlatforms}><li className={style.liPlatform}>{g}</li></ul>)}
                </div>
            </div>
        </div>
    )
}

export default DetailsCard