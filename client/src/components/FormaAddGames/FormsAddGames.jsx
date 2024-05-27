import style from './FormsAddGames.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres, getAllPlatforms } from '../../Redux/Actions';

export default function FormsAddGames() {
    const dispatch = useDispatch();
    const allGenres = useSelector(state => state.genres);
    const allPlatforms = useSelector(state => state.platforms);
    
    useEffect(() => {
        dispatch(getAllGenres());
      }, [dispatch]);
      console.log(allGenres)
      useEffect(() => {
          dispatch(getAllPlatforms());
      }, [dispatch]);
    const [formData, setformData] = useState({
        name: '',
        image: '',
        description: '',
        platforms: [],
        released: '',
        rating: '',
        genre: [],
    })
    const handleChange = (event) => {
        setformData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    return (
        <div className={style.container}>
            <form action="http://localhost:3001/videogames" method="post" className={style.input}>
                <div className={style.input}>
                    <label htmlFor="name" className={style.input}>Name: </label>
                    <input type="link" name="name" id="name" placeholder="Name" required className={style.inputText} />
                </div>
                <div className={style.input}>
                    <label htmlFor="image" className={style.input}>Image: </label>
                    <input type="text" name="image" id="image" placeholder="Image" required className={style.inputText} />
                </div>
                <div className={style.input}>
                    <label htmlFor="description" className={style.input}>Description: </label>
                    <input className={style.inputText} type="textarea" name="description" id="description" placeholder="Description" size={50} required />
                </div>
                <div className={style.inputGenres}>
                    <label htmlFor="platform" className={style.input}>Platforms: </label>
                    {allPlatforms.map((platform) => (
                        <div key={platform.id} className={style.genres}>
                            <span >{platform.name}</span>
                            <input type="checkbox" name="platforms" value={platform.name} onChange={handleChange} />
                        </div>
                    ))}
                </div>
                <div className={style.input}>
                    <label htmlFor="released" className={style.input}>Released: </label>
                    <input type="date" name="form.released" id="released" placeholder="Released" required className={style.inputText} />
                </div>
                <div className={style.input}>
                    <label htmlFor="rating" className={style.input}>Rating</label>
                    <input type="number" name="form.rating" max={5} min={1} id="rating" placeholder="Rating" required className={style.inputText} />
                </div>
                <div className={style.inputGenres}>
                    <label htmlFor="genre" className={style.input}>Genre: </label>
                    {allGenres.map((genre) => (
                        <div key={genre.id} className={style.genres}>
                            <span >{genre.name}</span>
                            <input type="checkbox" name="genres" value={genre.name} onChange={handleChange} />
                        </div>
                    ))}
                </div>
                <button type="submit" className={style.buttonS}>Submit</button>
            </form>
        </div>
    )
}