
import { Router } from 'express';
import authRoutes from './authRoutes';
import contactRoutes from './contactRoutes';
import depositionRoutes from './depositionRoutes';
import heroRoutes from './heroRoutes';


const router = Router();

router.get('/', (req, res) => {
  res.send('Server is online');
});

router.use('/auth', authRoutes);

router.use('/contacts', contactRoutes);

router.use('/depositions', depositionRoutes);

router.use('/hero', heroRoutes);

export default router;
