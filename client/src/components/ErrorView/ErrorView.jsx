import style from './ErrorView.module.css';
import { useNavigate } from 'react-router-dom';

export default function ErrorView(show, onClose) {
    const navigate = useNavigate();
    if (!show) {
        return null; // No mostrar el modal si show es false
    }

    const handleGoHome = () => {
        navigate('/home');
    };
    return (
        <div className={style.container}>
            <div>
                <h2 className={style.subtitle}>Play Again?</h2>
                <button className={style.btn} onClick={onClose}>Yes</button>
                <button className={style.btn} onClick={handleGoHome}>No</button>
            </div>
        </div>
    )
}