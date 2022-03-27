import { IFeatureFlagRepository } from '../../contracts/IFeatureFlagRepository';

export const getOneByKey = async (
  repository: IFeatureFlagRepository,
  key: string
) => {
  const flags = await repository.getOneByKey(key);

  return flags;
};
