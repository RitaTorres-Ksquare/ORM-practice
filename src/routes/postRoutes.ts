import express from 'express';
import { createPost, getPost, getAllPosts } from '../controllers/postController';

const router = express.Router();

router.post('/', createPost);
router.get('/', getAllPosts);
router.get('/:id', getPost);

export default router;