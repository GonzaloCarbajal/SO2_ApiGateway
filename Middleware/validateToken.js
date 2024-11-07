// middlewares/validateOrderId.js
const validateToken = (req, res, next) => {

    // Obtener el token de la cabecera 'Authorization'
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Token de autorización no proporcionado o en formato incorrecto' });
    }

    const token = authHeader.split(' ')[1]; // Extraer el token después de "Bearer"
    next(); // Continuar con la siguiente función
};

export default validateToken;