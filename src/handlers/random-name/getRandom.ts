import { randomNameService } from '../../application/use-cases';

export const getRandom = async (): Promise<string[]> => {
  const names = await randomNameService.getRandom();

  return names;
};
