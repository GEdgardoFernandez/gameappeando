import style from './ErrorView.module.css';
import { useNavigate } from 'react-router-dom';

export default function ErrorView() {
    const navigate = useNavigate();
 
    return (
        <div className={style.container}>
            <div>
                <h2 className={style.subtitle}>Play Again?</h2>
                <button className={style.btn} onClick={() => window.location.href = `/home`}>Yes</button>
                <button className={style.btn} onClick={() => window.location.href = '/'}>No</button>
            </div>
        </div>
    )
}