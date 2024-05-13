const { Videogame } = require('../models/Videogame');

const createVideogame = async (req, res) => {
  try {
    const { name, genres, description, rating, released, platforms } = req.body;
    console.log(name)
/*     if (!name || !description || !genres) {
      return res.status(400).json({ message: 'Faltan datos obligatorios' });
    } */
   
      
    const newVideogame = await {
      name,
      genres,
      description,
      
    };
    res.status(201).json(newVideogame);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Error al crear el videojuego' });
  }
};

module.exports = createVideogame;