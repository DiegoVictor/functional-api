import 'dotenv/config';
import express from 'express';

import { featureFlagController, randomNameController } from './handlers';

const app = express();

app.get('/featureFlags', async (_, response) => {
  const flags = await featureFlagController.getAll();
  response.json(flags);
});

app.get('/featureFlags/:key', async (request, response) => {
  const { key } = request.params;
  const flag = await featureFlagController.getOneByKey(key);

  if (flag) {
    return response.json(flag);
  }

  return response.status(404).json({
    message: 'Feature flag not found',
  });
});

app.get('/randomNames', async (_, response) => {
  const names = await randomNameController.getRandom();
  response.json(names);
});

app.listen(process.env.PORT);
