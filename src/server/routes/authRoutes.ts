
import express from 'express';
import { login, register, deleteUser, getAllUsers, getUserById } from '../controllers/authController';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.delete('/delete/:id', deleteUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);

export default router;
