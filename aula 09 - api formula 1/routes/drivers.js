import express from 'express';
import Joi from 'joi';

import { randomUUID } from 'node:crypto';

import arraySorter from '../sorter.js';

import { sortedDriversArray } from '../data.js';

const router = express.Router();

router.get('/', (request, response) => {
    response.send(sortedDriversArray);
});

router.get('/:id', (request, response, next) => {
    const routeID = request.params.id;
    const selectedDriver = sortedDriversArray.find(driver => driver.id === routeID);

    if (!selectedDriver) {
        const myError = new Error();

        myError.httpStatusCode = 404;
        myError.description = 'Piloto não encontrado';

        return next(myError);
    }

    response.send(selectedDriver);
});

router.get('/placements/:position', (request, response, next) => {
    const positionSchema = Joi.number().min(1).max(sortedDriversArray.length);

    const routePosition = request.params.position;

    const { error } = positionSchema.validate(routePosition);

    if (error) {
        const myError = new Error();

        myError.httpStatusCode = 400;
        myError.description = error.details;

        return next(myError);
    }

    const driverPosition = sortedDriversArray[routePosition - 1];

    response.send(driverPosition);
});

router.post('/', (request, response, next) => {
    const driverSchema = Joi.object({
        name: Joi.string().required(),
        team: Joi.string().required(),
        points: Joi.number().integer().default(0),
    });

    const { value, error } = driverSchema.validate(request.body, { abortEarly: false });

    if (error) {
        const myError = new Error();

        myError.httpStatusCode = 400;
        myError.description = error.details;

        return next(myError);
    }

    const newDriver = { ...value, id: randomUUID() };

    sortedDriversArray.push(newDriver);

    arraySorter(sortedDriversArray);

    response.send(newDriver);
});

router.put('/:id', (request, response, next) => {
    const updatedDriverSchema = Joi.object({
        name: Joi.string(),
        team: Joi.string(),
        points: Joi.number().integer(),
    }).min(1);

    const { error } = updatedDriverSchema.validate(request.body, { abortEarly: false });

    if (error) {
        const myError = new Error();

        myError.httpStatusCode = 400;
        myError.description = error.details;

        return next(myError);
    }

    const routeID = request.params.id;
    const selectedDriver = sortedDriversArray.find(driver => driver.id === routeID);

    if (!selectedDriver) {
        const myError = new Error();

        myError.httpStatusCode = 404;
        myError.description = 'Piloto não encontrado';

        return next(myError);
    }

    for (const key in selectedDriver) {
        if (request.body[key]) {
            selectedDriver[key] = request.body[key];
        }
    }

    arraySorter(sortedDriversArray);

    response.send(selectedDriver);
});

router.delete('/:id', (request, response, next) => {
    const routeID = request.params.id;
    const selectedDriver = sortedDriversArray.find(driver => driver.id === routeID);

    if (!selectedDriver) {
        const myError = new Error();

        myError.httpStatusCode = 404;
        myError.description = 'Piloto não encontrado';

        return next(myError);
    }

    const selectedDriverIndex = sortedDriversArray.indexOf(selectedDriver);

    sortedDriversArray.splice(selectedDriverIndex, 1);

    response.send(selectedDriver);
});

export default router;
