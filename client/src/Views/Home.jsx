import MenuBar from "../components/MenuBar/MenuBar";
import GamesCards from "../components/GamesCards/GamesCards";
const Home = () => {

    return (
        <div>
            <MenuBar />
            <h1>Henry Videogames</h1>
            <div>
                <GamesCards />
            </div>
        </div>
    )
}

export default Home