import style from './SearchBar.module.css';
import { getGameName } from '..//..//Redux/Actions'
import {useDispatch} from 'react-redux'
import { useState, useEffect } from 'react';
import OrderGenre from '../OrderGenre/OrderGenre';

export default function SearchBar({onSearch}) {
    const dispatch = useDispatch();
    const [game, setGame] = useState('');
    function handleChange (event){
        setGame(event.target.value)
    };
    useEffect(()=>{
        dispatch( getGameName(game))
    }, [dispatch]);

    function handleSubmit(event){
        event.preventDefault();
        onSearch(game);
    };
    console.log(game)
    return (
        <div className={style.container}>
            <form action="submit">
                <input type="text" placeholder='Search game...' className={style.input}/>
                <button type='submit' className={style.buttonS}>Search</button>
            </form>
            <OrderGenre/>
        </div>
    )
}