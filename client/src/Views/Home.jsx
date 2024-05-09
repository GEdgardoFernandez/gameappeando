import MenuBar from "../components/MenuBar/MenuBar";
import GamesCards from "../components/GamesCards/GamesCards";

const Home = () => {

    return (
        <div className="containerHome">
            <MenuBar />
            <h1 className="h1home">Henry Videogames</h1>
            <div>
                <GamesCards />
            </div>
        </div>
    )
}

export default Home