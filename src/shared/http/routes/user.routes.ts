import { Router } from "express";


const userRoutes = Router();

const users = [];

userRoutes.post("/client");


export { userRoutes};