import express from 'express';
import cors from 'cors';
import photoRoutes from './src/routes/photoRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', photoRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
