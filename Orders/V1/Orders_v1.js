// Orders.js
import axios from 'axios';
import express from 'express';
const router = express.Router();


router.post("/", async (req, res) => {
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

router.get("/order/:id", async (req, res) => {
    try {

        const orderData = {
            order_id: "12345", // Reemplaza con el valor real
            user_id: "67890",  // Reemplaza con el valor real
            item_id: "abc123", // Reemplaza con el valor real
            discount_id: "xyz789", // Reemplaza con el valor real
            payment: {
                method: req.params.id, // Reemplaza con el método de pago real
                card_number: "4111111111111111", // Reemplaza con el número de tarjeta real
                valid_at: "12/25", // Reemplaza con la fecha de validez real
                document_number: "FEDE" // Reemplaza con el número de documento real
            },
            created_at: new Date().toISOString(), // Fecha de creación en formato ISO
            updated_at: new Date().toISOString() // Fecha de actualización en formato ISO
        };

        res.status(200).json(orderData);
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error prueba' });
    }
});

router.get("/pokemon", async (req, res) => {
    try {
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';
        const response = await axios.get(apiUrl);

        if (!response.status === 200) {
            throw new Error(`Error al obtener datos: ${response.status} - ${response.statusText}`);
        }

        const data = response.data;
        res.status(200).json(data);
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error al obtener datos de la API externa' });
    }
});

export default router;