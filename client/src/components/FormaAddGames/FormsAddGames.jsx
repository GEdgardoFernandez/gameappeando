



export default function FormsAddGames() {
    return (
        <div>
            <form action="http://localhost:3001/videogame" method="post">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" placeholder="Name" required/>
                <br/>
                <label htmlFor="genre">Genre: </label>
                <input type="text" name="genre" id="genre" placeholder="Genre" required/>
                <br/>
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" id="description" placeholder="Description" size={50} required/>
                <br/>
                <button type="submit">Submit</button>
            </form>        
        </div>
    )   
}