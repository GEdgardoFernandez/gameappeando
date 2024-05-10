const { Videogame } = require('../models/Videogame');
const axios = require('axios');

const getAllVideogames = async (req, res) => {
  try {
    const URL = `https://api.rawg.io/api/games?key=${process.env.API_KEY}`;
    const response = await axios.get(URL);
    const videogames = response.data.results.slice(0, 100);
    res.json(videogames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los videojuegos' });
  }
};

module.exports = getAllVideogames;