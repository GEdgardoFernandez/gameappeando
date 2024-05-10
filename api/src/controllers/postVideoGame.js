const { Videogame } = require('../models/Videogame');

const createVideogame = async (req, res) => {
  try {
    const { name, description, genres, rating, released, platforms } = req.body;
    if (!name || !description || !genres) {
      return res.status(400).json({ message: 'Faltan datos obligatorios' });
    }
   
      
    Videogame.create({
      name,
      background_image,
      description,
      released,
      rating,
      platforms,
      createdInDb
  })

    res.status(201).json(Videogame);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Error al crear el videojuego' });
  }
};

module.exports = createVideogame;