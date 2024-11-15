import fetch from "node-fetch";

const validateToken = async (req, res, next) => {
    // Obtener el token de la cabecera 'Authorization'
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Token de autorización no proporcionado o en formato incorrecto' });
    }

    const token = authHeader.split(' ')[1]; // Extraer el token después de "Bearer"

    try {
        const response = await fetch('http://localhost:6000/api/verify-token', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}` // Usa el token recibido en la cabecera
            }
        });

        if (!response.ok) {
            console.error('Error en la solicitud:', response.statusText);
            return res.status(500).json({ error: 'Error en la verificación del token' });
        }

        const data = await response.json();

        // Verifica si el mensaje en la respuesta es "true"
        if (data.message === "true") {
            console.log('Token verificado correctamente.');
            next(); // Si el token es válido, pasa al siguiente middleware
        } else {
            console.log('Token no verificado.');
            return res.status(401).json({ error: 'Token no válido' });
        }
    } catch (error) {
        console.error('Error en la conexión:', error);
        return res.status(500).json({ error: 'Error en la conexión al servicio de verificación de tokens' });
    }
};

export default validateToken;
