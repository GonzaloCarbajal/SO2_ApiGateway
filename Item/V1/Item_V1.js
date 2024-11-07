// Orders.js
import axios from 'axios';
import express from 'express';
const router = express.Router();
import validateToken from '../../Middleware/validateToken.js';

router.get("/:id", validateToken, async (req, res) => {
    try {
        const productData = {
            id: 1,
            name: null,           // Campo vacío convertido a `null`
            price: null,          // Campo vacío convertido a `null`
            description: null,    // Campo vacío convertido a `null`
            image_url: null,      // Campo vacío convertido a `null`
            created_at: null,     // Campo vacío convertido a `null`
            modified_at: null     // Campo vacío convertido a `null`
        };

        res.status(200).json(productData);
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error prueba' });
    }
});


router.post("/", validateToken, async (req, res) => {
    try {
        console.log('body log:', req.body);
        const productData = {
            id: 1,
            name: null,           // Campo vacío convertido a `null`
            price: null,          // Campo vacío convertido a `null`
            description: null,    // Campo vacío convertido a `null`
            image_url: null,      // Campo vacío convertido a `null`
            created_at: null,     // Campo vacío convertido a `null`
            modified_at: null     // Campo vacío convertido a `null`
        };

        res.status(201).json(productData);
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error prueba' });
    }
});

router.put("/:id", validateToken, async (req, res) => {
    try {
        const productData = {
            id: 1,
            name: null,           // Campo vacío convertido a `null`
            price: null,          // Campo vacío convertido a `null`
            description: null,    // Campo vacío convertido a `null`
            image_url: null,      // Campo vacío convertido a `null`
            created_at: null,     // Campo vacío convertido a `null`
            modified_at: null     // Campo vacío convertido a `null`
        };

        res.status(200).json(productData);
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error prueba' });
    }
});

router.delete("/:id", validateToken, async (req, res) => {
    try {
        const productData = {
            id: 1,
            name: null,           // Campo vacío convertido a `null`
            price: null,          // Campo vacío convertido a `null`
            description: null,    // Campo vacío convertido a `null`
            image_url: null,      // Campo vacío convertido a `null`
            created_at: null,     // Campo vacío convertido a `null`
            modified_at: null     // Campo vacío convertido a `null`
        };

        res.status(200).json(productData);
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error prueba' });
    }
});


// Ruta con el middleware


export default router;