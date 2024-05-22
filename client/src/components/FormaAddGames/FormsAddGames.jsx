import style from './FormsAddGames.module.css';



export default function FormsAddGames() {
    return (
        <div className={style.container}>
            <form action="http://localhost:3001/videogames" method="post" className={style.input}>
                <div className={style.input}>
                    <label htmlFor="name" className={style.input}>Name: </label>
                    <input type="link" name="name" id="name" placeholder="Name" required className={style.inputText}/>
                </div>
                <div className={style.input}>
                    <label htmlFor="image" className={style.input}>Image: </label>
                    <input type="text" name="image" id="image" placeholder="Image" required className={style.inputText}/>
                </div>
                <div className={style.input}>
                    <label htmlFor="description" className={style.input}>Description: </label>
                    <input className={style.inputText} type="textarea" name="description" id="description" placeholder="Description" size={50} required />
                </div>
                <div className={style.input}>
                    <label htmlFor="platform" className={style.input}>Platforms: </label>
                    <span className={style.input}>PS4</span>
                    <input type="checkbox" name="PS4" id="PS4" value="PS4" />
                    <span className={style.input}>Xbox</span>
                    <input type="checkbox" name="Xbox" id="Xbox" value="Xbox" />
                    <span className={style.input}>PC</span>
                    <input type="checkbox" name="PC" id="PC" value="PC" />
                    <span className={style.input}>PS5</span>
                    <input type="checkbox" name="PS5" id="PS5" value="PS5" />
                    <span className={style.input}>Xbox One</span>
                    <input type="checkbox" name="Xbox One" id="Xbox One" value="Xbox One" />
                </div>
                <div className={style.input}>
                    <label htmlFor="released" className={style.input}>Released: </label>
                    <input type="date" name="released" id="released" placeholder="Released" required className={style.inputText}/>
                </div>
                <div className={style.input}>
                    <label htmlFor="rating" className={style.input}>Rating</label>
                    <input type="number" name="rating" max={5} min={1} id="rating" placeholder="Rating" required className={style.inputText}/>
                </div>
                <div className={style.input}>
                    <label htmlFor="genre" className={style.input}>Genre: </label>
                    <input type="checkbox" name="" id="" />
                </div>
                <button type="submit" className={style.buttonS}>Submit</button>
            </form>
        </div>
    )
}