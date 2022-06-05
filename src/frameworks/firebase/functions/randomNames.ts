import { randomNameController } from '@handlers';
import { createServer } from '@frameworks/utils/express';

const randomNames = createServer();
randomNames.get('/', randomNameController.getRandom);

export { randomNames };
