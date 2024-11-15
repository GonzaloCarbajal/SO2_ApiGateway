// Orders.js
import axios from 'axios';
import express from 'express';
const router = express.Router();
import validateToken from '../../Middleware/validateToken.js';
import fetch from "node-fetch";

router.get("/:id", validateToken, async (req, res) => {
    try {
        /*
        const productData = {
            id: 1,
            name: null,           // Campo vacío convertido a `null`
            price: null,          // Campo vacío convertido a `null`
            description: null,    // Campo vacío convertido a `null`
            image_url: null,      // Campo vacío convertido a `null`
            created_at: null,     // Campo vacío convertido a `null`
            modified_at: null     // Campo vacío convertido a `null`
        };

         */

        const id = req.params.id;
        console.log('id', id);

        // URL de la API
        const url = `http://localhost:5000/api/v1/${id}`;


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
        const messageError = error.message;
        res.status(500).json({error: `Error al hacer la petición: ${messageError}`});
    }
});


router.post("/", validateToken, async (req, res) => {
    try {
        console.log('body log:', req.body);
        /*
        const productData = {
            id: 1,
            name: null,           // Campo vacío convertido a `null`
            price: null,          // Campo vacío convertido a `null`
            description: null,    // Campo vacío convertido a `null`
            image_url: null,      // Campo vacío convertido a `null`
            created_at: null,     // Campo vacío convertido a `null`
            modified_at: null     // Campo vacío convertido a `null`
        };

         */

        const { name, price, description, image_url } = req.body;
        const data = {
            name, price, description, image_url
        };

        // Configuración de la solicitud
        const url = 'http://localhost:5000/api/v1/';
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
        /*
        const discountData = {
            id: 1,
            code: req.body.code,
            discount_percent: 20,
            is_active: false,
            created_at: null,   // Campo vacío convertido a `null`
            modified_at: null   // Campo vacío convertido a `null`
        };

         */


    } catch (error) {
        const messageError = error.message;
        res.status(500).json({error: `Error al hacer la petición: ${messageError}`});
    }
});

router.put("/:id", validateToken, async (req, res) => {
    try {
        /*
        const productData = {
            id: 1,
            name: null,           // Campo vacío convertido a `null`
            price: null,          // Campo vacío convertido a `null`
            description: null,    // Campo vacío convertido a `null`
            image_url: null,      // Campo vacío convertido a `null`
            created_at: null,     // Campo vacío convertido a `null`
            modified_at: null     // Campo vacío convertido a `null`
        };

         */

        const { name, price, description, image_url } = req.body;
        const body = {
            name, price, description, image_url
        };

        const id = req.params.id;
        // Construir la URL
        const url = `http://localhost:5000/api/v1/${id}`;

// Realizar la solicitud PUT
        fetch(url, {
            method: 'PUT',  // Definir el método como PUT
            headers: {
                'Content-Type': 'application/json',  // Especificar que se enviará JSON
            }, body: JSON.stringify(body),  // Convertir el cuerpo a una cadena JSON
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();  // Convertir la respuesta a JSON
            })
            .then(data => {
                console.log('Datos recibidos:', data);  // Mostrar los datos recibidos
                res.status(200).json(data);
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);  // Manejo de errores
                const messageError = error.message;
                res.status(404).json({error: `Primer Error al hacer la petición: ${messageError}`});

            });
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(404).json({ error: 'Error prueba' });
    }
});

router.delete("/:id", validateToken, async (req, res) => {
    try {
        /*
        const productData = {
            id: 1,
            name: null,           // Campo vacío convertido a `null`
            price: null,          // Campo vacío convertido a `null`
            description: null,    // Campo vacío convertido a `null`
            image_url: null,      // Campo vacío convertido a `null`
            created_at: null,     // Campo vacío convertido a `null`
            modified_at: null     // Campo vacío convertido a `null`
        };

         */

        const id = req.params.id;
        console.log('id', id);

        // Construir la URL de la API
        const url = `http://localhost:5000/api/v1/${id}`;

        // Realizar la solicitud DELETE
        fetch(url, {
            method: 'DELETE',  // Definir el método como DELETE
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                //return response.json();  // Convertir la respuesta a JSON
            })
            .then(data => {
                console.log('Datos recibidos:', data);  // Mostrar los datos recibidos
                res.status(204).json(data);
            })
            .catch(error => {
                const messageError = error.message;
                res.status(404).json({error: `Primer Error al hacer la petición: ${messageError}`});
            });

    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({ error: 'Error prueba' });
    }
});


// Ruta con el middleware


export default router;