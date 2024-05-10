const axios = require('axios');
const { Genre } = require('../db');


const getAllGenres = async (req, res) => {
    try {

        const response = await axios.get(`https://api.rawg.io/api/genres?key=${process.env.API_KEY}`);
        const genresFromAPI = response.data.results;
        for (const genreData of genresFromAPI) {
            const existingGenre = await Genre.findOne({ where: { name: genreData.name } });
            if (!existingGenre) {
                await Genre.create({ name: genreData.name });
            }
        }
        
        const allGenres = await Genre.findAll();
        
        res.status(200).json(allGenres);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener y almacenar los géneros' });
    }
};

module.exports = getAllGenres;