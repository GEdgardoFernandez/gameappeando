const op = require('sequelize').Op;
const { Videogame, Genre } = require('../db')
const getVideogamesByName = async (req, res) => {
  const { name } = req.params;
  if (!name) {
    return res.status(404).send('Query parameter name is required')
  }
  try {
    console.log(`Searching for games with name: ${name}`);

    let apiResponse = await axios.get(`https://api.rawg.io/api/games?key=31b8a402bc5a4f928521cc08b5d4b639&&search=${name}`)
    const apiGames = apiResponse.data.results ? apiResponse.data.results.map(game => ({
      id: game.id,
      name: game.name,
      released: game.released,
      rating: game.rating,
      image: game.background_image,
      platforms: game.platforms ? game.platforms.map(p => p.platform.name) : [],
      genres: game.genres ? game.genres.map(g => g.name) : [],
    })) : [];

    console.log('API Games:', apiGames);

    const getGameByNameDB = await Videogame.findAll({
      where: {
        name: { [op.iLike]: `%${name}%` }
      },
      include: {
        model: Genre,
        attributes: ['name']
      }
    })
    console.log('DB Games:', getGameByNameDB);
    const dbGamesFormatted = dbGames.map(game => ({
      id: game.id,
      name: game.name,
      released: game.released,
      rating: game.rating,
      image: game.image,
      platforms: game.platforms?.map(p => p.name), // Asume que tienes plataformas en la base de datos
      genres: game.genres.map(g => g.name),
  }));
  console.log('DB Games Formatted:', dbGamesFormatted);
        // Combinar resultados y obtener los primeros 15
        const allGames = [...apiGames, ...dbGamesFormatted].slice(0, 15);

        if (allGames.length === 0) {
            return res.status(404).send('No games found with that name');
        }

        return allGames;

  }catch (error) {
    console.error('Error in getGameByName:', error);
    res.status(500).send('Error retrieving games');
}

};

module.exports = getVideogamesByName;