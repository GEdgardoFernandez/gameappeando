const op = require('sequelize').Op;
const { Videogame, Genre } = require('../db')
const getVideogamesByName = async (req, res, name) => {
  let searchAPIData = await axios.get(`https://api.rawg.io/api/games/${name}?key=${API_KEY}`);
  let apiData = [];
  if (searchAPIData.data.platforms && searchAPIData.data.genres && searchAPIData.data.id) {
  searchAPIData.data.results.map(d => {
    let platforms = d.platforms ? d.platforms.map(p => p.platform.name) : [];
    let genres = d.genres ? d.genres.map(g => g.name) : [];
    
    apiData.push(
      {
        id: d.id,
        name: d.name,
        image: d.background_image,
        description: d.description_raw,
        released: d.released,
        rating: d.rating,
        platforms: platforms,
        genres: genres,
        createdInDB: d.createdInDB
      }
    );
  });
}
  console.log(apiData.length + ' datos encontrados, se devuelven ');
  return apiData
};

const getGameByNameDB = async (req, res, name) => {
  const searchGame = await Videogame.findAll({
    where: {
      name: {
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