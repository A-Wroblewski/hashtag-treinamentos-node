import 'dotenv/config';

import express from 'express';

import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';

const app = express();

app.use('/users', userRouter);
app.use('/products', productRouter);

app.listen(3000, () => {
    console.log('server listening...');
});
