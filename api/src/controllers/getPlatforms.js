const axios = require('axios');
const { Genre } = require('../db');
require('dotenv').config();
const { API_KEY } = process.env;


const getAllPlatforms = async (req, res, next) => {
    try {

        const  platformsApi= await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
        const platforms = platformsApi.data.results;
        platforms.map((d) => {
          platforms.findOrCreate({
            where: { name: d.name,
                     id: d.id
                    }
          });
        });
        const allPlatforms = await platforms.findAll();
        console.log(allPlatforms.length + ' OK !');
        return res.json(allPlatforms);
        
      } catch (error) {
        return next(error)
      }
    };

module.exports = getAllPlatforms;