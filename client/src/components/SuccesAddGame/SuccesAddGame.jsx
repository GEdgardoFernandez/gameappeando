import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from '..//SuccesAddGame/SuccesAddGame.module.css';

export default function SuccessAddGame({ show, onClose }) {
    const navigate = useNavigate();
    if (!show) {
        return null;
    }

    const handleGoHome = () => {
        onClose();
        navigate('/home');
    };

    return (
        <div className={style.modalBackdrop}>
            <div className={style.modalContent}>
                <h2>Add Game Succesful</h2>
                <button onClick={handleGoHome} className={style.button}>
                    Go Home!
                </button>
            </div>
        </div>
    );
}