import express from 'express';
import { users } from '../data.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('usuário criado');
});

router.put('/', (req, res) => {
    res.send('usuário atualizado');
});

router.delete('/', (req, res) => {
    res.send('usuário apagado');
});

export default router;
