import style from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const navigate = useNavigate();
    return (
        <div className={style.container}>
            <button className={style.but} onClick={() => navigate('/home')}>
                Start
            </button>
        </div>
    )
}

export default LoginForm