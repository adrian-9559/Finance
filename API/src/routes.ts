import { Router } from 'express';
import usuarioRoutes from './routes/usuarioRoutes'; // Importa las rutas de usuario
import transaccionRoutes from './routes/transaccionRoutes'; // Importa las rutas de transacción
import objetivoAhorroRoutes from './routes/objetivoAhorroRoutes'; // Importa las rutas de objetivo de ahorro
import informeFinancieroRoutes from './routes/informeFinancieroRoutes'; // Importa las rutas de informe financiero
import configuracionUsuarioRoutes from './routes/configUserRoutes'; // Importa las rutas de configuración de usuario
import categoriaRoutes from './routes/categoriaRoutes'; // Importa las rutas de categoría

const router = Router();

router.get('/', (req, res) => {
    res.send('Bienvenido a la API de Finance');
});

router.use('/usuarios', usuarioRoutes); // Usa las rutas de usuario
router.use('/transacciones', transaccionRoutes); // Usa las rutas de transacción
router.use('/objetivos-ahorro', objetivoAhorroRoutes); // Usa las rutas de objetivo de ahorro
router.use('/informes-financieros', informeFinancieroRoutes); // Usa las rutas de informe financiero
router.use('/configuraciones-usuario', configuracionUsuarioRoutes); // Usa las rutas de configuración de usuario
router.use('/categorias', categoriaRoutes); // Usa las rutas de categoría

export default router;