import style from './FormsAddGames.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres, getAllPlatforms, createGame } from '../../Redux/Actions';
import SuccesAddGame from '../SuccesAddGame/SuccesAddGame';
import ErrorAddGame from '../ErrorView/ErrorView';
export default function FormsAddGames() {
    const dispatch = useDispatch();

    //trayendo Genres y platforms
    const genres = useSelector((state) => state.genres);
    const platform = useSelector((state) => state.platforms);

    useEffect(() => {
        dispatch(getAllPlatforms())
        dispatch(getAllGenres())
    }, [dispatch])

    //formulario y errores
    const [error, setError] = useState({});
    const [game, setGame] = useState({
        name: "",
        released: "",
        description: "",
        genres: [],
        platforms: [],
        img: "",
        rating: 0,
    });

    const handleInput = (e) => {
        setGame({
            ...game,
            [e.target.name]: e.target.value,
        })
        setError(validate({
            ...game,
            [e.target.name]: e.target.value,
        }))
    };

    //añadir y eliminar platforms
    const handleSelectPlatform = (e) => {
        if(e.target.value !== "platforms" && !game.platforms.includes(e.target.value)) {
            setGame({
                ...game,
                platforms: [...game.platforms, e.target.value]
            })
        }
    };

    const handleDeletePlatform = (e) => {
        e.preventDefault();
        setGame({
            ...game,
            platforms: game.platforms.filter(plat => plat !== e.target.value)
        })
    }
    //añadir y eliminar genres
    const handleSelectGenre = (e) => {
        if(e.target.value !== "genres" && !game.genres.includes(e.target.value)) {
            setGame({
                ...game,
                genres: [...game.genres, e.target.value]
            });
        }
    };

    const handleDeleteGenre = (e) => {
        e.preventDefault();
        setGame({
            ...game,
            genres: game.genres.filter(genre => genre !== e.target.value)
        });
    };

    const validate = (form) =>{
        const errors = {};
        if(game.name.length < 2) {errors.name = "Name must have at least 2 characters"};
        if(game.description.length < 15) {errors.description = "Description must have at least 15 characters"};
        if(game.rating < 0 || game.rating > 5) {errors.rating = "Rating must be greater than 0"}
        if(isNaN(game.rating)) {errors.rating = "Rating must be a number"}
        if(game.genres.length < 2) {errors.genres = "The game must have at least one gender"}
        if(game.platforms.length < 2) {errors.platforms = "the game must have at least one platform"}
        return errors;
    };

    //Logica para postear el game
    const handleCreate = async(e)  => {
        e.preventDefault()
        setError(validate(game))
        if(Object.values(error).length >0) {
            return <div><ErrorAddGame /></div>
        } else {
            dispatch(createGame(game));
            return <div><SuccesAddGame /></div>
        }
    };

    return (
        <div className={style.container}>
            <div className={style.container}>
                <form className={style.form} onSubmit={handleCreate}>
                    <h2 className={style.name}>Create Videogame</h2> 
                    <label><span className={style.input}>Name: </span></label>
                    <input 
                        className={style.inputText}
                        type="text" 
                        name="name"
                        placeholder='Game name'
                        onChange={handleInput}
                        autoComplete="off"
                        />
                    {error.name && <span className={style.error}>{error.name}</span>}
                    <label><span className={style.input}>Description: </span></label>
                    <input 
                    className={style.inputText}
                        type="text"
                        name="description"
                        onChange={handleInput}
                        autoComplete="off"
                        placeholder='Game description'
                    />
                    {error.description && <span>{error.description}</span>}
                    <label><span className={style.input}>Released: </span></label>
                    <input 
                    className={style.inputText}
                        type="date"
                        name="released"
                        onChange={handleInput}
                        autoComplete="off"
                    />
                    <label><span className={style.input}>Rating: </span></label>
                    <input 
                    className={style.inputText}
                        type="number"
                        name="rating"
                        onChange={handleInput}
                        autoComplete="off"
                        placeholder='0-5'
                        min="0"
                        max="5"
                    />
                    {error.rating && <span>{error.rating}</span>}
                    <label><span className={style.input}>Image: </span></label>
                    <input 
                    className={style.inputText}
                        type="url" 
                        name="img"
                        onChange={handleInput}
                        autoComplete="off"
                    />
                    <select name="platforms" onChange={handleSelectPlatform} className={style.inputText}>
                        <option value="platforms" className={style.inputText}>Platforms</option>
                        {platform?.map((pla, i) => {return(<option key={i} className={style.inputText}>{pla.name}</option>)})}
                    </select>
                    {error.platforms &&<span className={style.inputText}>{error.platforms}</span>}
                    <div>
                        {
                            game.platforms?.map((plat, index) => {
                                return(
                                    <span key={index} className={style.inputText} >{plat}<button value={plat} onClick={handleDeletePlatform} className={style.inputText}>X</button></span>
                                )
                            })
                        }
                    </div>
                    <select name="genres" onChange={handleSelectGenre} className={style.inputText}>
                        <option value="genres" className={style.inputText}>genres</option>
                        {genres?.map((genre, i) => {return(<option key={i} className={style.inputText}>{genre.name}</option>)})}
                    </select>
                    {error.genres &&<span className={style.inputText}>{error.genres}</span>}
                    <div className={style.inputText}>
                        {
                            game.genres?.map((genre, index) => {
                                return(
                                    <span key={index} className={style.inputText}>{genre}<button value={genre} onClick={handleDeleteGenre} className={style.inputText}>X</button></span>
                                )
                            })
                        }
                    </div>
                    <button className={style.buttonS} type="submit">CREATE</button>
                </form>
            </div>
        </div>
    )
};