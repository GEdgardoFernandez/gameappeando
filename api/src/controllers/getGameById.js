const axios = require ('axios');
require('dotenv').config();
const {API_KEY} = process.env;
const { Videogame, Genres } = require ('../db')

const getGameById = async (req, res, next) => {
  const { id } = req.params;
    try {
      if(String(id).includes('-')){
         let searchDB = await Videogame.findOne({
           where: {id: id},
           include: {
             model: Genres,
             attributes: ['name']
           }
         })
         // Normaliza los datos para que platforms siempre sea un array de strings
         let foundGameDB = {
               id: searchDB.id,
               name: searchDB.name,
               image: searchDB.image,
               description: searchDB.description,
               released: searchDB.released,
               rating: searchDB.rating,
               platforms: searchDB.platforms[0].split(','),
               genres: searchDB.genres.map(g => g.name),
         }
         return res.status(200).json(foundGameDB)
        } else {
        let searchApiId = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        let foundGameApi = {
               id: searchApiId.data.id,
               name: searchApiId.data.name,
               img: searchApiId.data.background_image,
               image: searchApiId.data.background_image_additional,
               description: searchApiId.data.description,
               released: searchApiId.data.released,
               rating: searchApiId.data.rating,
               platforms: searchApiId.data.platforms.map(p => p.platform.name),
               genres: searchApiId.data.genres.map(g => g.name)
        }
        return res.status(200).json(foundGameApi)
      }
     } catch (e) {
       console.log(e)
       throw e // Lanza el error para que pueda ser manejado por getDataID
     }
   };

const getDataID = async (req, res, next) => {
     try {
       let game =  await getGameById(id);
       if(!game) return res.status(404).json({ msg:"We couldn't find your game" });
       return res.status(200).json(game)
     } catch (e) {
       return next(e)
     };
   };

module.exports = { getGameById, getDataID };
