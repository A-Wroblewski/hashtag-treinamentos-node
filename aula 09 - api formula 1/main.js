import express from 'express';

import driversRouter from './routes/drivers.js';
import constructorsRouter from './routes/constructors.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/drivers', driversRouter);
app.use('/constructors', constructorsRouter);

app.use((error, request, response, next) => {
    response.status(error.httpStatusCode).send(error);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
