import { randomNameService } from '../../application/use-cases';
import { featureFlatRepository } from '../../infra/repositories';

export const getRandom = async (): Promise<string[] | string> => {
  const names = await randomNameService.getRandom(featureFlatRepository);

  return names;
};
