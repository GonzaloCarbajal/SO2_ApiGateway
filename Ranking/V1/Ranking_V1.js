// Orders.js
import axios from 'axios';
import express from 'express';
const router = express.Router();
import validateToken from '../../Middleware/validateToken.js';

router.get("/ranking", async (req, res) => {
    try {
        const rankingData = {
            items: [
                {
                    id: 1,
                    name: null,           // Campo vacío convertido a `null`
                    price: null,          // Campo vacío convertido a `null`
                    description: null,    // Campo vacío convertido a `null`
                    image_url: null,      // Campo vacío convertido a `null`
                    created_at: null,     // Campo vacío convertido a `null`
                    modified_at: null     // Campo vacío convertido a `null`
                },
                // Agrega más objetos de producto aquí si es necesario
                {
                    id: 10,
                    name: null,           // Campo vacío convertido a `null`
                    price: null,          // Campo vacío convertido a `null`
                    description: null,    // Campo vacío convertido a `null`
                    image_url: null,      // Campo vacío convertido a `null`
                    created_at: null,     // Campo vacío convertido a `null`
                    modified_at: null     // Campo vacío convertido a `null`
                }
            ]
        };

        res.status(200).json(rankingData);
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error prueba' });
    }
});


router.post("/update_ranking", validateToken, async (req, res) => {
    try {

        res.status(200).json();
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error prueba' });
    }
});


// Ruta con el middleware


export default router;