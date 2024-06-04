import style from './FormsAddGames.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres, getAllPlatforms, createGame } from '../../Redux/Actions';
import ErrorAddGame from '../ErrorView/ErrorView';
import SuccesAddGames from '../SuccesAddGame/SuccesAddGame';
import { useNavigate } from 'react-router-dom';
import { validate } from './validation';
export default function FormsAddGames() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
    const initialState = {
        name: "",
        released: "",
        description: "",
        genres: [],
        platforms: [],
        img: "",
        rating: 0,
    }
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalError, setIsModalError] = useState(false);
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
        if (e.target.value !== "platforms" && !game.platforms.includes(e.target.value)) {
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
        if (e.target.value !== "genres" && !game.genres.includes(e.target.value)) {
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
    useEffect(() => {
        setError(validate(game))
        if (Object.values(error).length === 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [error, game])
 
    //Logica para postear el game
    console.log(game)
    const handleCreate = async (e) => {
        setError(validate(game))
        if (Object.values(error).length >= 1) {
        } else if ( Object.values(error).length === 0) {
            dispatch(createGame(game));
            setIsModalVisible(true);
            setGame(initialState);
        }
    };
    const handleCloseModal = () => {
        setIsModalVisible(false); // Oculta el modal
    };
    const handleCloseError = () => {
        setIsModalError(false); // Oculta el modal
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
                    {error.description && <span className={style.error}>{error.description}</span>}
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
                    {error.rating && <span className={style.error}>{error.rating}</span>}
                    <label><span className={style.input}>Image: </span></label>
                    <input
                        className={style.inputText}
                        type="text"
                        name="img"
                        onChange={handleInput}
                        autoComplete="off"
                    />
                    <select name="platforms" onChange={handleSelectPlatform} className={style.inputText}>
                        <option value="platforms" className={style.inputText}>Platforms</option>
                        {platform?.map((pla, i) => { return (<option key={i} className={style.inputText}>{pla.name}</option>) })}
                    </select>
                    {error.platforms && <span className={style.error}>{error.platforms}</span>}
                    <div>
                        {
                            game.platforms?.map((plat, index) => {
                                return (
                                    <span key={index} className={style.inputText} >{plat}<button value={plat} onClick={handleDeletePlatform} className={style.buttonX}>X</button></span>
                                )
                            })
                        }
                    </div>
                    <select name="genres" onChange={handleSelectGenre} className={style.inputText}>
                        <option value="genres" className={style.inputText}>genres</option>
                        {genres?.map((genre, i) => { return (<option key={i} className={style.inputText}>{genre.name}</option>) })}
                    </select>
                    {error.genres && <span className={style.error}>{error.genres}</span>}
                    <div className={style.inputText}>
                        {
                            game.genres?.map((genre, index) => {
                                return (
                                    <span key={index} className={style.inputText}>{genre}<button value={genre} onClick={handleDeleteGenre} className={style.buttonX}>X</button></span>
                                )
                            })
                        }
                    </div>
                    <button className={style.buttonS} type="submit" disabled={buttonDisabled}>CREATE</button>
                </form>
                <SuccesAddGames show={isModalVisible} onClose={handleCloseModal} />
                {/* <ErrorAddGame show={isModalError} onClose={handleCloseError} /> */}
            </div>
        </div>
    )
};