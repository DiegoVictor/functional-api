import { IFeatureFlagRepository } from '../../contracts/IFeatureFlagRepository';

export const getOneByKey = async (
  repository: IFeatureFlagRepository,
  key: string
) => repository.getOneByKey(key);
