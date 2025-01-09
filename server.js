import express from 'express';
import cors from 'cors';
import photoRoutes from './src/routes/photoRoutes.js';

const app = express();

app.use(cors({
  origin: '*'
}));
app.use(express.json());

app.use('/api', photoRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
