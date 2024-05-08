const { Videogame } = require('../models/Videogame');

const createVideogame = async (req, res) => {
  try {
    const { name, description, platforms, /* otros datos necesarios */ } = req.body;
    // Aquí puedes realizar la creación del videojuego en la base de datos utilizando Sequelize
    // Asegúrate de manejar correctamente la relación con los géneros
    res.status(201).json({ message: 'Videojuego creado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el videojuego' });
  }
};

module.exports = createVideogame;