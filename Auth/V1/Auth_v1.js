// Orders.js
import axios from 'axios';
import express from 'express';
const router = express.Router();

router.get("/validate_token",  async (req, res) => {
    try {
        // Supongamos que tienes una función asíncrona llamada `validateToken` que valida el token
        const jsonResponse = await validateToken(req.headers.authorization);

        res.status(200).json(jsonResponse);
    } catch (error) {
        // En caso de error en la validación
        res.status(500).json({ error: "Token validation failed" });
    }
});

function validateToken(token) {
    try {
        console.log('Token: ', token);
        // Si es válido, retorna un JSON con validate: true
        return { "validate": true };
    } catch (error) {
        // Si el token no es válido o hay algún error, retorna un JSON con validate: false
        return { "validate": false };
    }
}

export default router;