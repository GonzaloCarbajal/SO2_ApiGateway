import express from 'express';
import ranking_v1 from './V1/Ranking_V1.js';

const router = express.Router();

// Asegúrate de que `orders_v1` esté exportado correctamente desde `Orders_v1.js`
router.use("/v1", ranking_v1);
export default router;
