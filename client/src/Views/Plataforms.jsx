import MenuBar from "../components/MenuBar/MenuBar";
import FormsAddGames from "../components/FormaAddGames/FormsAddGames";
import Footer from "../components/Footer/Footer";
export default function Plataforms() {
    
    return (
        <div className="containerHome">
            <MenuBar />
            <FormsAddGames />
            <div className="footer">
                <Footer />
            </div>
        </div>
    )   
}