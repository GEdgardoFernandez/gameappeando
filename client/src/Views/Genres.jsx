import GamesCards from "../components/GamesCards/GamesCards";
import MenuBar from "../components/MenuBar/MenuBar";
import OrderGenre from "../components/OrderGenre/OrderGenre";
export default function Genres() {

    return (
        <div className="containerHome">
            <MenuBar />
            <OrderGenre />
            {/* <GamesCards /> */}
        </div>
    )
}