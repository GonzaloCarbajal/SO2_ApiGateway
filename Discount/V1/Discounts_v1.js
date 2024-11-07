// Orders.js
import axios from 'axios';
import express from 'express';
const router = express.Router();
import validateToken from '../../Middleware/validateToken.js';

router.get("/:id", validateToken, async (req, res) => {
    try {
        const discountData = {
            id: 2,
            code: "PROFERENZO20OFF",
            discount_percent: 20,
            is_active: true,
            created_at: null,   // Campo vacío convertido a `null`
            modified_at: null   // Campo vacío convertido a `null`
        };

        res.status(200).json(discountData);
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error prueba' });
    }
});

router.get("/", validateToken, async (req, res) => {
    try {
        const discountsData = {
            discounts: [
                {
                    id: 1,
                    code: "50OFF",
                    discount_percent: 50,
                    is_active: false,
                    created_at: null,    // Campo vacío convertido a `null`
                    modified_at: null    // Campo vacío convertido a `null`
                },
                {
                    id: 2,
                    code: "XHGLP",
                    discount_percent: 20,
                    is_active: false,
                    created_at: null,    // Campo vacío convertido a `null`
                    modified_at: null    // Campo vacío convertido a `null`
                }
            ]
        };

        res.status(200).json(discountsData);
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error prueba' });
    }
});

router.post("/", validateToken, async (req, res) => {
    try {
        console.log('body log:', req.body);
        const discountData = {
            id: 1,
            code: req.body.code,
            discount_percent: 20,
            is_active: false,
            created_at: null,   // Campo vacío convertido a `null`
            modified_at: null   // Campo vacío convertido a `null`
        };

        res.status(200).json(discountData);
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error prueba' });
    }
});

router.put("/:id", validateToken, async (req, res) => {
    try {
        const discountData = {
            id: req.params.id,
            code: null,            // Campo vacío convertido a `null`
            discount_percent: null, // Campo vacío convertido a `null`
            is_active: null,        // Campo vacío convertido a `null`
            created_at: null,       // Campo vacío convertido a `null`
            modified_at: null      // Campo vacío convertido a `null`
        };

        res.status(200).json(discountData);
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error prueba' });
    }
});

router.delete("/:id", validateToken, async (req, res) => {
    try {
        const discountData = {
            id: req.params.id,
            code: null,            // Campo vacío convertido a `null`
            discount_percent: null, // Campo vacío convertido a `null`
            is_active: null,        // Campo vacío convertido a `null`
            created_at: null,       // Campo vacío convertido a `null`
            modified_at: null      // Campo vacío convertido a `null`
        };

        res.status(200).json(discountData);
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error prueba' });
    }
});


// Ruta con el middleware


export default router;