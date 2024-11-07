// app.js o archivo principal
import express from 'express';
import axios from 'axios';
import orders from './Orders/Orders.js'; // Importa correctamente el router de Orders.js
import auth from './Auth/Auth.js';
import cors from "cors";

const app = express();

// Habilita CORS para todas las rutas
//app.use(cors());


app.use(cors({
    origin: 'https://dominioservidor.com',
    credentials: true
}));



// Endpoint de ejemplo
app.get('/api/pokemon', async (req, res) => {
    try {
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';
        const response = await axios.get(apiUrl);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error al hacer la petición:', error);
        res.status(500).json({ error: 'Error al obtener datos de la API' });
    }
});

//Aca le expones tu api para el front o backoffice
app.get('/api/v1/ranking', async (req, res) => {
    try {
        const apiUrl = 'http://192.168.100.19:8080/api/v1/ranking'; //Aca se le pega a otra api
        const response = await axios.get(apiUrl);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error al hacer la petición:', error);
        res.status(500).json({ error: 'Error al obtener datos de la API' });
    }
});

// Usar el router de `Orders.js` como middleware
app.use("/orders", orders);

// Usar el router de `Auth.js` como middleware
app.use("/auth", auth);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
