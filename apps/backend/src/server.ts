import express from 'express';

import { env } from '@env';
import helmet from 'helmet';

import cors from 'cors';

import router from './router';

const app = express();

/** req.body middlewares */
app.use(express.json({ limit: '15kb' }));
app.use(express.urlencoded({ extended: true }));

/** Helmet */
app.use(helmet());

/** CORS */
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    maxAge: 1800, // 30 minutes
}));

/** API routes */
app.use("/", router)

/** 404 handler */
app.use("*", (_, res) =>
    res.status(404).json({
        message: "Not found",
    })
);

app.listen(env.PORT, () => console.log(`Listening on port ${env.PORT}`));