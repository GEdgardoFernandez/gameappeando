const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getGameById, getDataID} = require('../controllers/getGameById');
const getAllGenres = require('../controllers/genreController');
const getAllVideogames = require('../controllers/getAllVideoGames');
const getVideogamesByName = require('../controllers/getGameByName');
const postVideoGame = require('../controllers/postVideoGame');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', getAllVideogames);
router.get('/videogames/:id', getGameById);
router.get('/videogames/:name', getVideogamesByName);
router.get('/genres', getAllGenres);
router.post('/videogame', postVideoGame);

module.exports = router;