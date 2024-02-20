import express from 'express';
import { getAllHeroes, getHeroById, createHero, updateHero, deleteHero } from '../controllers/heroController';

const router = express.Router();

router.get('/', getAllHeroes);
router.get('/:id', getHeroById);
router.post('/', createHero);
router.put('/:id', updateHero);
router.delete('/:id', deleteHero);

export default router;
