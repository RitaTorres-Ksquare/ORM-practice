import express from 'express';
import { createUser, getUser, getAllUsers } from '../controllers/userController';

const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUser);

export default router;