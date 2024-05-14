const axios = require('axios');
const { Genre } = require('../db');
require('dotenv').config();
const { API_KEY } = process.env;


const getAllGenres = async (req, res, next) => {
    try {

        const  genresApi= await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const dataApi = genresApi.data.results;
        
        dataApi.map((d) => {
          Genre.findOrCreate({
            where: { name: d.name,
                     id: d.id
                    }
          });
        });
        const allGenres = await Genre.findAll();
        console.log(allGenres.length + ' Todo bien');
        return res.json(allGenres);
        
      } catch (e) {
        return next(e)
      }
    };

module.exports = getAllGenres;