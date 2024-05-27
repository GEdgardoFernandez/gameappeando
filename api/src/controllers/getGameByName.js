const axios = require('axios');
const { Videogame } = require('../db');

const getVideogamesByName = async (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).send('Query parameter "name" is required');
  }
  try {
    // Buscar en la API
    const apiResponse = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=YOUR_API_KEY`);
    const apiGames = apiResponse.data.results.map(game => ({
      id: game.id,
      name: game.name,
      description: game.description,
      image: game.background_image,
      platforms: game.platforms ? game.platforms.map(p => p.platform.name) : [],
      genres: game.genres ? game.genres.map(g => g.name) : [],
    }));

    // Buscar en la base de datos
    const dbGames = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: Genre,
    });

    const dbGamesFormatted = dbGames.map(game => ({
      id: game.id,
      name: game.name,
      description: game.description,
      image: game.image,
      platforms: game.platforms,
      genres: game.genres.map(g => g.name),
    }));

    // Combinar resultados
    const allGames = [...apiGames, ...dbGamesFormatted].slice(0, 15);

    if (allGames.length === 0) {
      return res.status(404).send('No games found with that name');
    }

    res.json(allGames);
  } catch (error) {
    console.error('Error in getVideogamesByName:', error);
    res.status(500).send('Error retrieving games');
  }
};

module.exports = getVideogamesByName;