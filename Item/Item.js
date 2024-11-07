import express from 'express';
import items_v1 from './V1/Item_V1.js';

const router = express.Router();

// Asegúrate de que `orders_v1` esté exportado correctamente desde `Orders_v1.js`
router.use("/v1", items_v1);

// Exporta `router` para que `Orders.js` pueda usarse como middleware en el archivo principal
export default router;
