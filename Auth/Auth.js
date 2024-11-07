import express from 'express';
import auth_v1 from './V1/Auth_v1.js';

const router = express.Router();

// Asegúrate de que `auth_v1` esté exportado correctamente desde `Auth_v1.js`
router.use("/v1", auth_v1);

// Exporta `router` para que `Orders.js` pueda usarse como middleware en el archivo principal
export default router;