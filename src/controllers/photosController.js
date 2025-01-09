import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const PIXABAY_API_URL = process.env.PIXABAY_API_URL;
const PIXABAY_KEY = process.env.PIXABAY_KEY;

export const getPhotos = async (req, res) => {
    try {
      const response = await axios.get(`${PIXABAY_API_URL}?key=${PIXABAY_KEY}&q=beautiful+landscape&image_type=photo&orientation=horizontal&page=2&per_page=30`);
  
      const photos = response.data;
      res.json(photos);
    } catch (error) {
      console.error('Erro ao buscar fotos do Unsplash:', error);
      res.status(500).json({ message: 'Erro ao buscar fotos do Unsplash' });
    }
  };
