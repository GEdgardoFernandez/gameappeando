const axios = require('axios');
const getDBData = require('./getApiDataGame');
const getApiData = require('./getApiDataGame');
const { Videogame, Genres } = require ('../db')

const getAllVideogames = async (req, res, next) => {
  const { name } = req.query;

  try {
    if (!name) {
      let apiData = await getApiData();
      let DBData = await getDBData();

      if (!apiData && !DBData) {
        console.log('No se encontraron datos');
        return res.status(404).json({ msg: "No se encontraron datos" });
      }

      let allData = [...DBData, ...apiData];
      console.log(allData.length + ' datos encontrados, se devuelven');
      return res.status(200).json(allData);
    } else {
      let apiDataByName = await getGamesByName(name);
      if (!apiDataByName) {
        console.log('No se encontraron datos para el nombre proporcionado');
        return res.status(404).json({ msg: "No se encontraron datos para el nombre proporcionado" });
      }

      let allDataByName = [...apiDataByName];
      console.log(allDataByName.length + ' datos encontrados para el nombre proporcionado');
      let dataSlice = allDataByName.slice(0, 10);
      console.log(dataSlice.length + ' datos encontrados para el nombre proporcionado');
      return res.status(200).json(dataSlice);
    }
  } catch (error) {
    console.error('Error al obtener los datos:', error.message);
    return next(error);
  }
};

module.exports = getAllVideogames;