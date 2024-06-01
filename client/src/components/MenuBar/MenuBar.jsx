import style from './MenuBar.module.css';
import { Link , useNavigate} from 'react-router-dom';

export default function MenuBar({onSearch}) {
const navigate = useNavigate();
    return (
        <div className={style.container}>
            <Link to={'/home'}>
            <button className={style.btn}>Home</button>
            </Link>

            <button className={style.btn} onClick={() => navigate('/addgame')} >Add Game</button>
            <button className={style.btn} onClick={() => navigate('/about')}>About Me</button>
        </div>
    )
}