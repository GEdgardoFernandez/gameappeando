



export default function FormsAddGames() {
    return (
        <div>
            <form action="http://localhost:3001/videogame" method="post">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" placeholder="Name" required/>
                <br/>
                <label htmlFor="image">Image: </label>
                <input type="text" name="image" id="image" placeholder="Image" required/>
                <br/>
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" id="description" placeholder="Description" size={50} required/>
                <br/>
                <label htmlFor="platform">Platforms: </label>
                <span>PS4</span>
                <input type="checkbox" name="PS4" id="PS4" value="PS4" />
                <span>Xbox</span>
                <input type="checkbox" name="Xbox" id="Xbox" value="Xbox" />
                <span>PC</span>
                <input type="checkbox" name="PC" id="PC" value="PC" />
                <span>PS5</span>
                <input type="checkbox" name="PS5" id="PS5" value="PS5" />
                <span>Xbox One</span>
                <input type="checkbox" name="Xbox One" id="Xbox One" value="Xbox One" />
                <br/>
                <label htmlFor="released">Released: </label>
                <input type="text" name="released" id="released" placeholder="Released" required/>
                <br/>
                <label htmlFor="rating">Rating</label>
                <input type="float" name="rating" id="rating" placeholder="Rating" required/>
                <br/>
                <label htmlFor="genre">Genre: </label>
                <input type="checkbox" name="" id="" />
                <br/>
                <button type="submit">Submit</button>
            </form>        
        </div>
    )   
}