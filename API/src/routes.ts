import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Bienvenido a la API de Finance');
});

export default router;