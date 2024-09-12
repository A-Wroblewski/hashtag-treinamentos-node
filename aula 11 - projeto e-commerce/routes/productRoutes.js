import express from 'express';

import ProductRepository from '../Repository/ProductRepository.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const result = await new ProductRepository().getAll();

    res.send(result);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const result = await new ProductRepository().getByID(id);

    res.send(result);
});

export default router;
