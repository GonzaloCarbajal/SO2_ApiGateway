// Orders.js
import axios from 'axios';
import express from 'express';
const router = express.Router();
import validateToken from '../../Middleware/validateToken.js';
import fetch from "node-fetch";

router.post("/", validateToken , async (req, res) => {
    try {
        console.log('body', req.body )
        /*
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

         */


        // Configuración de la solicitud
        const data = req.body;
        const url = 'http://localhost:7000/api/v1/';
        const options = {
            method: 'POST',  // Método HTTP
            headers: {
                'Content-Type': 'application/json',  // Tipo de contenido
            }, body: JSON.stringify(data)  // Cuerpo de la solicitud
        };

        // Realizar la solicitud
        fetch(url, options)
            .then(response => response.json())  // Convertir la respuesta a formato JSON
            .then(data => {
                console.log('Respuesta de la API:', data);
                res.status(201).json(data);
            })
            .catch(error => {
                const messageError = error.message;
                res.status(500).json({error: `Primer Error al hacer la petición: ${messageError}`});
            });
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error al obtener datos de la API Orders' });
    }
});

// Ruta con el middleware
router.get("/:id", validateToken, async (req, res) => {
    try {
        /*
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

         */


        const id = req.params.id;
        console.log('id', id);

        // URL de la API
        const url = `http://localhost:7000/api/v1/${id}`;


        // Realizar la solicitud GET
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // Convertir la respuesta a JSON
            })
            .then(data => {
                console.log('Datos recibidos:', data);  // Mostrar los datos recibidos
                res.status(200).json(data);
            })
            .catch(error => {
                const messageError = error.message;
                res.status(500).json({error: `Error al hacer la petición: ${messageError}`});
            });
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error prueba' });
    }
});

router.get("/", validateToken, async (req, res) => {
    try {
    /*
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

     */


        // URL de la API
        const url = `http://localhost:7000/api/v1/`;


        // Realizar la solicitud GET
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // Convertir la respuesta a JSON
            })
            .then(data => {
                console.log('Datos recibidos:', data);  // Mostrar los datos recibidos
                res.status(200).json(data);
            })
            .catch(error => {
                const messageError = error.message;
                res.status(500).json({error: `Error al hacer la petición: ${messageError}`});
            });



    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error prueba' });
    }
});

export default router;