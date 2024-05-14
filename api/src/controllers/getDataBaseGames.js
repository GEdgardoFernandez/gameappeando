const { Videogame, Genres } = require('../db');

const getDataBaseGames= async (req, res)=> {
    try {
        const videoGames = await Videogame.findAll({
          include: [
            {
              model: Genres,
              through: {
                attributes: ['name'],
              },
            },
          ],
        });
    
        const data = videoGames.map(vgames => ({
          name: vgames.name,
          id: vgames.id,
          image: vgames.image,
          description: vgames.description,
          released: vgames.released,
          rating: vgames.rating,
          platforms: vgames.platforms,
          genre: vgames.genres.map(g => g.name),
          create: vgames.create,
        }));
    
        return data;
      } catch (error) {
        console.error('Error al obtener datos de la base de datos:', error.message);
        throw error;
      }
}

module.exports = getDataBaseGames;