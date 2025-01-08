import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const UNSPLASH_API_URL = process.env.UNSPLASH_API_URL;
const UNSPLASH_KEY = process.env.UNSPLASH_KEY;

export const getPhotos = async (req, res) => {
    try {
      const response = await axios.get(UNSPLASH_API_URL, {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_KEY}`,
        },
      });
  
      const photos = response.data;
      res.json(photos);
    } catch (error) {
      console.error('Erro ao buscar fotos do Unsplash:', error);
      res.status(500).json({ message: 'Erro ao buscar fotos do Unsplash' });
    }
  };
