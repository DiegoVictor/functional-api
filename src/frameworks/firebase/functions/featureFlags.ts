import { featureFlagController } from '@handlers';
import { createServer } from '@frameworks/utils/express';

const featureFlags = createServer();
featureFlags.get('/', featureFlagController.getAll);
featureFlags.get('/:key', featureFlagController.getOneByKey);

export { featureFlags };
