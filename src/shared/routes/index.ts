import { Router } from "express";
import { userRoutes } from "./user.routes";




const router = Router();

/* ====================================================================
                         rotas de cada entidade
   ====================================================================*/


   router.use('/users', userRoutes);