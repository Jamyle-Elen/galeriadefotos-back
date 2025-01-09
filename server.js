import express from 'express';
import cors from 'cors';
import photoRoutes from './src/routes/photoRoutes.js';

const app = express();

app.use(cors({
  origin: '*'
}));
app.use(express.json());

app.use('/api', photoRoutes);
