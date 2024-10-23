// Importar axios y express usando la sintaxis ESM
import express from 'express';
import axios from 'axios';

// Crear una aplicación de Express
const app = express();

// Definir la URL de la API
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

// Definir el endpoint para manejar la solicitud desde Postman
app.get('/api/pokemon', async (req, res) => {
    try {
        // Hacer una petición GET a la API externa
        const response = await axios.get(apiUrl);

        // Manejar la respuesta y enviar los datos al cliente
        res.status(200).json(response.data);
    } catch (error) {
        // Manejar errores
        console.error('Error al hacer la petición:', error);
        res.status(500).json({ error: 'Error al obtener datos de la API' });
    }
});

// Configurar el servidor para que escuche en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
