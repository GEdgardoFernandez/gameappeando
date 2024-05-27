const axios = require('axios');
const op = require('sequelize').Op;
const { Videogame, Genre } = require('../db')
const { API_KEY} = process.env;

const getVideogamesByName = async (req, res) => {
  const { name } = req.params;
  if (!name) {
    return res.status(404).send('Query parameter name is required');
  }
  try {
    console.log(`Searching for games with name: ${name}`);

    // Obtener juegos de la API
    let apiResponse = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`);
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

    // Obtener juegos de la base de datos
    const dbGames = await Videogame.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` }
      },
      include: {
        model: Genre,
        attributes: ['name']
      }
    });
    console.log('DB Games:', dbGames);

    const dbGamesFormatted = dbGames.map(game => ({
      id: game.id,
      name: game.name,
      released: game.released,
      rating: game.rating,
      image: game.image,
      platforms: game.platforms,
      genres: game.genres.map(g => g.name),
    }));
    console.log('DB Games Formatted:', dbGamesFormatted);

    // Combinar resultados y eliminar duplicados
    const allGames = [...apiGames, ...dbGamesFormatted].reduce((acc, game) => {
      if (!acc.some(existingGame => existingGame.id === game.id)) {
        acc.push(game);
      }
      return acc;
    }, []);

    // Obtener los primeros 15 juegos
    const limitedGames = allGames.slice(0, 15);

    if (limitedGames.length === 0) {
      return res.status(404).send('No games found with that name');
    }

    res.json(limitedGames);
  } catch (error) {
    console.error('Error in getVideogamesByName:', error);
    res.status(500).send('Error retrieving games');
  }
};

module.exports = getVideogamesByName;