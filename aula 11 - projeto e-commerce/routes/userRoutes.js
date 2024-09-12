import express from 'express';

import UserRepository from '../Repository/UserRepository.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const result = await new UserRepository().getAll();

    res.send(result);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const result = await new UserRepository().getByID(id);

    res.send(result);
});

router.post('/', async (req, res) => {
    const result = await new UserRepository().insertOne();

    res.send(result);
});

export default router;
