const { Videogame, Genre } = require('../db.js');

const createVideogame = async (req, res, next) => {
  let { name, image, description, released, rating, platforms, genres } = req.body;

  if (!Array.isArray(platforms)) {
    return res.status(400).json({ error: 'Platforms must be an array of strings' });
  }

  //valido las propiedades obligatorias
  if (!name || !description || !genres) {
    return res.status(404).send('Missing data')
  }

  //valido
  const searchGame = await Videogame.findAll({ where: { name: name } })
  if (searchGame.length != 0) return res.send('That name already exists');

  try {
    //si no existe lo creo
    let gameCreate = await Videogame.create({
      name,
      image: image ? image : 'Search a image, please',
      description,
      released: released ? released : 'Release date not found',
      rating: rating ? rating : 0,
      platforms: platforms ? platforms.toString() : 'Not yet available for platforms',
    });

    let genre = await Genre.findAll({
      where: { name: genres }
    });

    gameCreate.addGenres(genre);

    res.send('The video game was created successfully');

  } catch (e) {
    return next(e)
  };
};
module.exports = createVideogame;