import { Router } from 'express';

import { addressRoutes } from './address.routes';
import { userRoutes } from './user.routes';

const router = Router();

/* ====================================================================
                      rotas de cada entidade
   ==================================================================== */

router.use('/users', userRoutes);
router.use('/address', addressRoutes);
export { router };
