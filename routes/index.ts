import * as express from 'express';
import itemRoutes from './item';

const router = express.Router();

// Use imported routes
router.use("/item",itemRoutes);

export default router;