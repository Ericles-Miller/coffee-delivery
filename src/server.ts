import {Request, Response} from 'express';
import express from 'express';


const app = express()

app.get("/", (Request, response)=> {
    return response.json({message: "Helo World ignite"})
}); // usando metodo de requisicao get 
