import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from '..//SuccesAddGame/SuccesAddGame.module.css';

export default function SuccessAddGame({ show, onClose }) {
    const navigate = useNavigate();

    if (!show) {
        return null; // No mostrar el modal si show es false
    }

    const handleGoHome = () => {
        navigate('/home');
    };

    return (
        <div className={style.modalBackdrop}>
            <div className={style.modalContent}>
                <div className={style.containerX}>
                    <button onClick={onClose} className={style.buttonX}>
                        X
                    </button>
                </div>
                <h2>Add Game Succesful</h2>

                <button className={style.button} onClick={handleGoHome}>Go Home</button>
            </div>
        </div>
    );
}