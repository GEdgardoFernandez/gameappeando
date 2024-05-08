const axios = require('axios');

const getGameById = async (req, res) => {
    try {
        const { id } = req.params;
        const url = `https://api.rawg.io/api/games/${id}?key=${process.env.API_KEY}`;
        const response = await axios.get(url); // Realiza la solicitud HTTP para obtener la información del juego
        
        // Extrae los datos relevantes de la respuesta
        const { name, description, released, background_image, rating, platforms, stores, developers } = response.data;

        // Crea un objeto con los datos del juego
        const gameData = {
            id: id,
            name: name,
            description: description,
            released: released,
            background_image: background_image,
            rating: rating,
            platforms: platforms,
            stores: stores,
            developers: developers,
        };

        // Envía la respuesta al cliente
        res.status(200).json(gameData);
    } catch (error) {
        // Maneja los errores
        console.error('Error al obtener el juego:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = getGameById;