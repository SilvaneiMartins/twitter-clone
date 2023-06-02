import express from 'express';

import {
    authRoutes,
    userRoutes,
    tweetRoutes,
} from './routes';

const app = express();

app.use(express.json());

// Configuração do body-parser

// Configuração do diretório público

// Configuração do CORS

// Configuração das rotas
app.use("/api/v1", authRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", tweetRoutes);

app.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000!');
});
