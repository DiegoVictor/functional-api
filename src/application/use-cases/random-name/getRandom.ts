import * as namedService from '../../../infra/services/named';

export const getRandom = async (): Promise<string[]> => {
  const names = await namedService.getNames();

  return names;
};
