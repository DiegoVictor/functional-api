import 'dotenv/config';
import express from 'express';
import { featureFlagController } from './handlers';

const app = express();

app.get('/featureFlags', async (_, response) => {
  const flags = await featureFlagController.getAll();
  response.json(flags);
});

app.listen(process.env.PORT);
