import style from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import start from '../../assets/sounds/Start.mp3';
const LoginForm = () => {
    const navigate = useNavigate();
    const [play] = useSound(start);
    return (
        <div className={style.container}>
            <button className={style.but} onClick={() => navigate('/home', play())}>
                Start
            </button>
        </div>
    )
}

export default LoginForm