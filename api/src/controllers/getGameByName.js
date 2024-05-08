const { Videogame } = require('../models/Videogame');

const getVideogamesByName = async (req, res) => {
  try {
    const { name } = req.query;
    const videogames = await Videogame.findAll({
      where: {
        name: { [Sequelize.Op.iLike]: `%${name}%` }
      },
      limit: 15
    });
    if (videogames.length === 0) {
      return res.status(404).json({ message: 'No se encontraron videojuegos' });
    }
    res.json(videogames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar videojuegos por nombre' });
  }
};

module.exports = getVideogamesByName;