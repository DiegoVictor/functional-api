import { randomNameService } from '../../application/use-cases';
import { featureFlatRepository } from '../../infra/repositories';

export const getRandom = async (): Promise<string[] | string> =>
  randomNameService.getRandom(featureFlatRepository);
