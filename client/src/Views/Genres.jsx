import GamesCards from "../components/GamesCards/GamesCards";
import MenuBar from "../components/MenuBar/MenuBar";
import OrderGenre from "../components/OrderGenre/OrderGenre";
import Footer from "../components/Footer/Footer";
export default function Genres() {

    return (
        <div className="containerHome">
            <MenuBar />
            <OrderGenre />
            <GamesCards />
            <div>
                <Footer />
            </div>
        </div>
    )
}