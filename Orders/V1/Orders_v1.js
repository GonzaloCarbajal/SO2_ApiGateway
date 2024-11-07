// Orders.js
import axios from 'axios';
import express from 'express';
const router = express.Router();
import validateToken from '../../Middleware/validateToken.js';

router.post("/", validateToken , async (req, res) => {
    try {
        console.log('body', req.body )

        const orderData = {
            order_id: "12345", // Reemplaza con el valor real
            user_id: "67890",  // Reemplaza con el valor real
            item_id: "abc123", // Reemplaza con el valor real
            discount_id: "xyz789", // Reemplaza con el valor real
            payment: {
                method: "credit_card", // Reemplaza con el método de pago real
                card_number: "4111111111111111", // Reemplaza con el número de tarjeta real
                valid_at: "12/25", // Reemplaza con la fecha de validez real
                document_number: "987654321" // Reemplaza con el número de documento real
            },
            created_at: new Date().toISOString(), // Fecha de creación en formato ISO
            updated_at: new Date().toISOString() // Fecha de actualización en formato ISO
        };

        res.status(201).json(orderData);
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error al obtener datos de la API Orders' });
    }
});

// Ruta con el middleware
router.get("/order/:id", validateToken, async (req, res) => {
    try {
        const orderData = [
            {
                user_id: 123,
                item_id: 123,
                discount_id: null,
                payment: {
                    method: null,
                    card_number: null,
                    valid_at: null,
                    document_number: null
                },
                order_id: null,
                created_at: null,
                updated_at: null
            },
            {
                user_id: 123,
                item_id: 1234,
                discount_id: null,
                payment: {
                    method: null,
                    card_number: null,
                    valid_at: null,
                    document_number: null
                },
                order_id: null,
                created_at: null,
                updated_at: null
            }
        ];

        res.status(200).json(orderData);
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error prueba' });
    }
});

router.get("/orders", validateToken, async (req, res) => {
    try {
        const orderData = [
            {
                user_id: 123,
                item_id: 123,
                discount_id: null, // Campo vacío convertido a `null`
                payment: {
                    method: null,        // Campo vacío convertido a `null`
                    card_number: null,    // Campo vacío convertido a `null`
                    valid_at: null,       // Campo vacío convertido a `null`
                    document_number: null // Campo vacío convertido a `null`
                },
                order_id: null,        // Campo vacío convertido a `null`
                created_at: null,      // Campo vacío convertido a `null`
                updated_at: null       // Campo vacío convertido a `null`
            },
            {
                user_id: 123,
                item_id: 1234,
                discount_id: null, // Campo vacío convertido a `null`
                payment: {
                    method: null,        // Campo vacío convertido a `null`
                    card_number: null,    // Campo vacío convertido a `null`
                    valid_at: null,       // Campo vacío convertido a `null`
                    document_number: null // Campo vacío convertido a `null`
                },
                order_id: null,        // Campo vacío convertido a `null`
                created_at: null,      // Campo vacío convertido a `null`
                updated_at: null       // Campo vacío convertido a `null`
            }
        ];

        res.status(200).json(orderData);
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error prueba' });
    }
});

export default router;