import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { featureFlagController, randomNameController } from '../../handlers';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/featureFlags', featureFlagController.getAll);
app.get('/featureFlags/:key', featureFlagController.getOneByKey);

app.get('/randomNames', randomNameController.getRandom);

export { app };
