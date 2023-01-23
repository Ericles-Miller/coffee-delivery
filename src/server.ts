import express from 'express';

const app = express();

app.use(express.json());

/* ==========================================================
                    Rotas vindas de routes 
 ============================================================*/




app.listen(3333, () => console.log('Server is running!'));
