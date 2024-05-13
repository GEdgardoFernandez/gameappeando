const axios = require('axios');

const getAllVideogames = async (req, res) => {
  try {
    const { page = 1, pageSize = 5 } = req.query;
    const offset = (page - 1) * pageSize;
    const URL = `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=${page}&page_size=${pageSize}`;
    const response = await axios.get(URL);
    const videogames = response.data.results;
    const paginatedGames = videogames.slice(offset, offset + pageSize);
    res.json(paginatedGames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los videojuegos' });
  }
};

module.exports = getAllVideogames;