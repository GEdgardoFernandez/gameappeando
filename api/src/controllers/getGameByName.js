
const { Videogame, Genre } = require ('../db')
const getVideogamesByName = async (req, res, name) => {
  let searchAPIData = await axios.get(`https://api.rawg.io/api/games/${name}?key=${API_KEY}`);
  let apiData = [];
  searchAPIData.data.results.map(d => {
    apiData.push(
      {
        id: d.id,
        name: d.name,
        image: d.background_image,
        description: d.description_raw,
        released: d.released,
        rating: d.rating,
        platforms: d.platforms.map(p => p.platform.name),
        genres: d.genres.map(g => g.name),
        createdInDB: d.createdInDB
      }
    );
  });
  return apiData
};

const getGameByNameDB = async (req, res, name) => {
  const searchGame = await Videogame.findAll({
    where: {
      name:{
        [op.iLike]: `%${name}%`
      }
    },
    include: [{
      model: Genre,
      attributes: ['name']
    }]
  })
  let NamegameDB = searchGame.map(d => {
    return {
            id: d.id,
            name: d.name,
            image: d.image,
            released: d.released,
            rating: d.rating,
            platforms: d.platforms,
            genres: d.genres.map(g => g.name),
            createdInDB: d.createdInDB
    }
  })
  return NamegameDB
}

module.exports = getVideogamesByName, getGameByNameDB;