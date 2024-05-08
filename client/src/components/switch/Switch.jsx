import React from 'react';
import style from './switch.module.css';

const Switch = ({ darkMode, setDarkMode }) => {
    const handleToggle = () => {
        setDarkMode(prevDarkMode => !prevDarkMode);
    };

    return (
        <div className={style.contSwitch}>
            <div>
                <span className={style.switchText}>Modo oscuro</span>
            </div>
            <label className={style.switch}>
                <input type="checkbox" className={style.input__check} checked={darkMode} onChange={handleToggle} />
                <span className={style.slider}></span>
            </label>
        </div>
    );
};

export default Switch;
