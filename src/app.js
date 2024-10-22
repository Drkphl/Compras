import e from 'express';

import Compras_router from './routes/Compras_router.js';


const app = e();

app.use(e.json());

app.use('/Compras', Compras_router);


app.listen(3000, () => console.log('Servidor rodando na porta ' + 3000));
