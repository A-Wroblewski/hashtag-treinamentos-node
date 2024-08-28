import express from 'express';
import Joi from 'joi';

import arraySorter from '../sorter.js';

import { createConstructorsArray } from '../data.js';

const router = express.Router();

router.get('/', (request, response) => {
    response.send(arraySorter(createConstructorsArray()));
});

router.get('/placements/:position', (request, response, next) => {
    const sortedConstructorsArray = arraySorter(createConstructorsArray());

    const positionSchema = Joi.number().min(1).max(sortedConstructorsArray.length);

    const routePosition = request.params.position;

    const { error } = positionSchema.validate(routePosition);

    if (error) {
        const myError = new Error();

        myError.httpStatusCode = 400;
        myError.description = error.details;

        return next(myError);
    }

    const constructorPosition = sortedConstructorsArray[routePosition - 1];

    response.send(constructorPosition);
});

export default router;
