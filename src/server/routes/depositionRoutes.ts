
import express from 'express';
import { getAllDepositions, getDepositionById, createDeposition, updateDeposition, deleteDeposition } from '../controllers/depositionController';

const router = express.Router();

router.get('/', getAllDepositions);
router.get('/:id', getDepositionById);
router.post('/', createDeposition);
router.put('/:id', updateDeposition);
router.delete('/:id', deleteDeposition);

export default router;
