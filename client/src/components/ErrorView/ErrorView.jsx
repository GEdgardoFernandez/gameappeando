import style from './ErrorView.module.css';


export default function ErrorView() {

    return (
        <div className={style.container}>   
            <h1 className={style.title}>Error 404</h1>
            <h2 className={style.subtitle}>Page not found</h2>
            <button className={style.btn} onClick={() => window.location.href = '/home'}>Back Home</button>
        </div>
    )
}