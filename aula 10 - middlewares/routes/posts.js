import express from 'express';
import { posts } from '../data.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(posts);
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('post criado');
});

router.put('/', (req, res) => {
    res.send('post atualizado');
});

router.delete('/', (req, res) => {
    res.send('post apagado');
});

export default router;
