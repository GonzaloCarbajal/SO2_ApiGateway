// Orders.js
import axios from 'axios';
import express from 'express';

const router = express.Router();
import validateToken from '../../Middleware/validateToken.js';
import fetch from 'node-fetch';

router.get("/:id", validateToken, async (req, res) => {
    try {


        const id = req.params.id;
        console.log('id', id);

        // URL de la API
        const url = `http://localhost:4000/api/v1/${id}`;


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
                console.error('Error al hacer la solicitud:', error);  // Manejo de errores
                res.status(500).json({error: 'Error'});
            });

        /*
        const discountData = {
            id: 2,
            code: "PROFERENZO20OFF",
            discount_percent: 20,
            is_active: true,
            created_at: null,   // Campo vacío convertido a `null`
            modified_at: null   // Campo vacío convertido a `null`
        };

         */

    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({error: 'Error'});
    }
});

router.get("/", validateToken, async (req, res) => {
    try {
        /*
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

         */

        // URL de la API
        const url = 'http://localhost:4000/api/v1/';

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
                console.error('Error al hacer la solicitud:', error);  // Manejo de errores
            });


    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({error: 'Error prueba'});
    }
});

router.post("/", validateToken, async (req, res) => {
    try {
        console.log('body log:', req.body);

        const {code, discount_percent, is_active, valid_unt} = req.body;
        const data = {
            code, discount_percent, is_active, valid_unt
        };

        // Configuración de la solicitud
        const url = 'http://localhost:4000/api/v1/';
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
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
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

        res.status(201).json(data);
    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        res.status(500).json({error: 'Error prueba'});
    }
});

router.put("/:id", validateToken, async (req, res) => {
    try {
        /*
        const discountData = {
            id: req.params.id,
            code: null,            // Campo vacío convertido a `null`
            discount_percent: null, // Campo vacío convertido a `null`
            is_active: null,        // Campo vacío convertido a `null`
            created_at: null,       // Campo vacío convertido a `null`
            modified_at: null      // Campo vacío convertido a `null`
        };

         */
        const {code, discount_percent, is_active, valid_unt} = req.body;

        // Definir el cuerpo de la solicitud
        const body = {
            code, discount_percent, is_active, valid_unt
        };

        const id = req.params.id;
        // Construir la URL
        const url = `http://localhost:4000/api/v1/${id}`;

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
                const messageError = error.message;
                res.status(500).json({error: `Error al hacer la petición: ${messageError}`});
                console.error('Error al hacer la solicitud:', error);  // Manejo de errores
            });


    } catch (error) {
        console.error('Error al hacer la petición:', error.message);
        const messageError = error.message;
        res.status(500).json({error: `Error al hacer la petición: ${messageError}`});
    }
});

router.delete("/:id", validateToken, async (req, res) => {
    try {
        /*
        const discountData = {
            id: req.params.id,
            code: null,            // Campo vacío convertido a `null`
            discount_percent: null, // Campo vacío convertido a `null`
            is_active: null,        // Campo vacío convertido a `null`
            created_at: null,       // Campo vacío convertido a `null`
            modified_at: null      // Campo vacío convertido a `null`
        };

         */

        const id = req.params.id;
        console.log('id', id);

        // Construir la URL de la API
        const url = `http://localhost:4000/api/v1/${id}`;

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
        const messageError = error.message;
        res.status(404).json({error: `Error al hacer la petición: ${messageError}`});
    }
});


// Ruta con el middleware


export default router;